<template>
  <main class="max-w-5xl mx-auto p-2 m-2 xs:my-8">
    <!-- Button group -->
    <div class="grid grid-cols-2 sm:flex gap-4 mb-4">
      <Button @click="giveUp" text="New Game" />
      <Button @click="modalStore.open('instructions')" text="Instructions" />
      <Button @click="modalStore.open('records')" text="Records" />
      <Button @click="modalStore.open('bosses')" text="Bosses" />
    </div>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4">
      <!-- Known info container -->
      <KnownInfo />
      <!-- Boss search/guess container -->
      <div class="w-full">
        <SearchPanel />
        <GuessesPanel />
      </div>
    </div>
    <!-- Effects -->
    <GuessedEffect @hideEffect="newGame" />
    <FailedEffect @hideEffect="newGame" />
    <!-- Modals -->
    <InstructionsModal />
    <RecordsModal />
    <BossesModal @newGame="newGame" />
  </main>
</template>

<script setup lang="ts">
import { useRecordsStore } from '@/stores/recordsStore'
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore'
import { useGamesStore } from '@/stores/gamesStore'
import type { ChosenGames } from '@/interfaces/ChosenGames';

const recordsStore = useRecordsStore()
const bossesStore = useBossesStore()
const modalStore = useModalStore()
const gamesStore = useGamesStore()

function giveUp() {
  // Trigger failure events
  modalStore.open('failed')

  // Add to guessed bosses
  bossesStore.guessedBosses.unshift(bossesStore.answer)

  // Display correct info as known
  bossesStore.known.name = bossesStore.answer.name
  bossesStore.known.game = bossesStore.answer.game
  bossesStore.known.souls = bossesStore.answer.souls
  bossesStore.known.health = bossesStore.answer.health
  bossesStore.known.weaknesses = bossesStore.answer.weaknesses
  bossesStore.known.resistances = bossesStore.answer.resistances
  bossesStore.known.hasNo.weaknesses = (bossesStore.answer.weaknesses.length === 0 ? true : false)
  bossesStore.known.hasNo.resistances = (bossesStore.answer.resistances.length === 0 ? true : false)
}

function newGame() {
  // Clear guesses
  bossesStore.guessedBosses.splice(0)
  modalStore.close('guessed')
  modalStore.close('failed')

  // Generate new boss
  bossesStore.answer = { ...bossesStore.allBosses[Math.floor(Math.random() * bossesStore.allBosses.length)] }

  // Reset known info
  bossesStore.known.name = '???'
  bossesStore.known.game = (gamesStore.oneGameChosen ? bossesStore.answer.game : '?')
  bossesStore.known.souls = '?'
  bossesStore.known.health = '?'
  bossesStore.known.weaknesses = []
  bossesStore.known.resistances = []
  bossesStore.known.hasNo.weaknesses = false
  bossesStore.known.hasNo.resistances = false
}

watch(() => modalStore.isOpen, () => {
  const body = document.querySelector('body') as HTMLBodyElement

  // Prevent scrolling while modals is open
  modalStore.isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden')
})

watch(recordsStore.records, () => {
  // Save records to localStorage
  localStorage.setItem('records', JSON.stringify(recordsStore.records));
})

onMounted(() => {
  // Get stored records
  if (localStorage.getItem('records')) recordsStore.records = JSON.parse(localStorage.getItem('records') as string)

  // Get stored games
  if (localStorage.getItem('games')) {
    const savedGames = JSON.parse(localStorage.getItem('games') as string)

    Object.keys(savedGames).forEach((key) => gamesStore.chosen[key as keyof ChosenGames].isChosen = savedGames[key].isChosen)
  }

  // Open bosses selection modal if none chosen
  if (gamesStore.noGamesChosen) modalStore.open('bosses')

  // Start first game
  newGame()
})
</script>
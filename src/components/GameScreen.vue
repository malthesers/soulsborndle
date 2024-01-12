<template>
  <main class="max-w-5xl mx-auto p-2 m-2 xs:my-8">
    <!-- Button group -->
    <div class="grid grid-cols-2 sm:flex gap-4 mb-4">
      <SoulsButton @click="giveUp" text="New Game" />
      <SoulsButton @click="modalStore.open('instructions')" text="Instructions" />
      <SoulsButton @click="modalStore.open('records')" text="Records" />
      <SoulsButton @click="modalStore.open('bosses')" text="Bosses" />
    </div>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4">
      <!-- Known info container -->
      <KnownPanel />
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
import type { Chosen } from '@/interfaces'

const recordsStore = useRecordsStore()
const bossesStore = useBossesStore()
const modalStore = useModalStore()
const gamesStore = useGamesStore()

function giveUp(): void {
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
  bossesStore.known.hasNo.weaknesses = bossesStore.answer.weaknesses.length === 0 ? true : false
  bossesStore.known.hasNo.resistances = bossesStore.answer.resistances.length === 0 ? true : false
}

function newGame(): void {
  // Clear guesses
  bossesStore.guessedBosses.splice(0)
  modalStore.close('guessed')
  modalStore.close('failed')

  // Generate new boss
  bossesStore.answer = { ...bossesStore.filteredBosses[Math.floor(Math.random() * bossesStore.filteredBosses.length)] }

  // Reset known info
  bossesStore.known.name = '???'
  bossesStore.known.game = gamesStore.oneGameChosen ? bossesStore.answer.game : '?'
  bossesStore.known.souls = '?'
  bossesStore.known.health = '?'
  bossesStore.known.weaknesses = []
  bossesStore.known.resistances = []
  bossesStore.known.hasNo.weaknesses = false
  bossesStore.known.hasNo.resistances = false
}

// When any modal is opened
watch(
  () => modalStore.isOpen,
  () => {
    const body = document.querySelector('body') as HTMLBodyElement

    // Prevent scrolling while modals is open
    modalStore.isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden')
  }
)

// When a new record is set or records are cleared
watch(recordsStore.records, () => {
  // Save records to localStorage
  localStorage.setItem('soulsborndle/records', JSON.stringify(recordsStore.records))
})

// When application is started
onMounted(() => {
  // Get stored records
  if (localStorage.getItem('soulsborndle/records'))
    recordsStore.records = JSON.parse(localStorage.getItem('soulsborndle/records') as string)

  // Get stored games
  if (localStorage.getItem('soulsborndle/games')) {
    const savedGames = JSON.parse(localStorage.getItem('soulsborndle/games') as string)

    Object.keys(savedGames).forEach((key) => (gamesStore.chosen[key as keyof Chosen] = savedGames[key]))
  }

  // Open bosses selection modal if none chosen
  if (gamesStore.noGamesChosen) modalStore.open('bosses')

  // Start first game
  newGame()
})
</script>

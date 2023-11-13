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
      <KnownInfo :known="known" />
      <!-- Boss search/guess container -->
      <div class="w-full">
        <SearchPanel @updateSearch="(value) => search = value" :bosses="bosses" :search="search" />
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

<script setup>
import demonsSoulsBosses from '../bosses/demons-souls.json'
import darkSouls1Bosses from '../bosses/dark-souls-1.json'
import darkSouls2Bosses from '../bosses/dark-souls-2.json'
import darkSouls3Bosses from '../bosses/dark-souls-3.json'
import bloodborneBosses from '../bosses/bloodborne.json'
import eldenRingBosses from '../bosses/elden-ring.json'
import { useRecordsStore } from '@/stores/recordsStore'
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore'
import { useGamesStore } from '@/stores/gamesStore'

const recordsStore = useRecordsStore()
const bossesStore = useBossesStore()
const modalStore = useModalStore()
const gamesStore = useGamesStore()

const bosses = computed(() => {
  let chosenBosses = []

  if (gamesStore.chosen.demonsSouls.isChosen) chosenBosses.push(...demonsSoulsBosses)
  if (gamesStore.chosen.darkSouls1.isChosen) chosenBosses.push(...darkSouls1Bosses)
  if (gamesStore.chosen.darkSouls2.isChosen) chosenBosses.push(...darkSouls2Bosses)
  if (gamesStore.chosen.darkSouls3.isChosen) chosenBosses.push(...darkSouls3Bosses)
  if (gamesStore.chosen.bloodborne.isChosen) chosenBosses.push(...bloodborneBosses)
  if (gamesStore.chosen.eldenRing.isChosen) chosenBosses.push(...eldenRingBosses)

  return chosenBosses
})

// const remainingBosses = computed(() => {
//   return bosses.value.filter(boss => !guessedBosses.value.some(guess => guess.name === boss.name));
// })

const search = ref('')
const correct = ref({})
const known = ref({
  name: '?',
  game: '?',
  souls: '?',
  health: '?',
  weaknesses: [],
  resistances: [],
  hasNo: {
    weaknesses: false,
    resistances: false
  }
})
const damageTypes = ref(['magic', 'fire', 'lightning', 'dark', 'holy', 'physical', 'slash', 'strike', 'thrust'])

function giveUp() {
  // Clear search value
  search.value = ''

  // Trigger failure events
  modalStore.open('failed')

  // Add to guessed bosses
  bossesStore.guessedBosses.unshift(correct.value)

  // Display correct info as known
  known.value.name = correct.value.name
  known.value.game = correct.value.game
  known.value.souls = correct.value.souls
  known.value.health = correct.value.health
  known.value.weaknesses = correct.value.weaknesses
  known.value.resistances = correct.value.resistances
  known.value.hasNo.weaknesses = (correct.value.weaknesses.length === 0 ? true : false)
  known.value.hasNo.resistances = (correct.value.resistances.length === 0 ? true : false)
}

function newGame() {
  // Clear search value
  search.value = ''

  // Clear guesses
  bossesStore.guessedBosses.splice(0)
  modalStore.close('guessed')
  modalStore.close('failed')

  // Generate new boss
  bossesStore.answer = { ...bosses.value[Math.floor(Math.random() * bosses.value.length)] }
  console.log(correct.value)

  // Reset known info
  known.value.name = '???'
  known.value.game = (gamesStore.oneGameChosen.value ? correct.value.game : '?')
  known.value.souls = '?'
  known.value.health = '?'
  known.value.weaknesses = []
  known.value.resistances = []
  known.value.hasNo.weaknesses = false
  known.value.hasNo.resistances = false
}

watch(() => modalStore.isOpen, () => {
  // Prevent scrolling while modals is open
  document.querySelector("body").classList = (modalStore.isOpen ? 'overflow-hidden' : '')
})

watch(() => recordsStore.records, () => {
  // Save records to localStorage
  localStorage.setItem('records', JSON.stringify(recordsStore.records));
})

onMounted(() => {
  // Get stored records
  if (localStorage.getItem('records')) recordsStore.records = JSON.parse(localStorage.getItem('records'))

  // Get stored games
  if (localStorage.getItem('games')) {
    const savedGames = JSON.parse(localStorage.getItem('games'))

    for (const game in savedGames) gamesStore.chosen[game].isChosen = savedGames[game].isChosen
  }

  if (gamesStore.noGamesChosen.value) {
    modalStore.open('bosses')
  }

  // Start first game
  newGame()
})
</script>
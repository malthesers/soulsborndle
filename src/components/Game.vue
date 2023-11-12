<template>
  <main class="max-w-5xl mx-auto p-2 m-2 xs:my-8">
    <!-- Button group -->
    <div class="grid grid-cols-2 sm:flex gap-4 mb-4">
      <Button @click="giveUp" text="New Game" />
      <Button @click="modals.open('instructions')" text="Instructions" />
      <Button @click="modals.open('records')" text="Records" />
      <Button @click="modals.open('bosses')" text="Bosses" />
    </div>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4">
      <!-- Known info container -->
      <KnownInfo :known="known" />
      <!-- Boss search/guess container -->
      <div class="w-full">
        <SearchPanel @guessEntered="(boss) => validateGuess(boss)" @updateSearch="(value) => search = value"
          :bosses="remainingBosses" :search="search" :wasGuessed="wasGuessed" />
        <GuessesPanel :guessedBosses="guessedBosses" :wasFailed="wasFailed" :correct="correct" />
      </div>
    </div>
    <!-- Effects -->
    <GuessedEffect @hideEffect="newGame" :wasGuessed="wasGuessed" />
    <FailedEffect @hideEffect="newGame" :wasFailed="wasFailed" />
    <!-- Modals -->
    <InstructionsModal @hideInstructions="modals.showing['instructions'] = false"
      :showInstructions="modals.showing['instructions']" />
    <RecordsModal @hideRecords="modals.showing['records'] = false" @resetRecords="records = []"
      :showRecords="modals.showing['records']" :records="records" />
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
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore'
import { useGamesStore } from '@/stores/gamesStore'

const bossesStore = useBossesStore()
const modals = useModalStore()
const gamesStore = useGamesStore()

const bosses = computed(() => {
  let chosenBosses = []

  if (gamesStore.chosenGames.demonsSouls.isChosen) chosenBosses.push(...demonsSoulsBosses)
  if (gamesStore.chosenGames.darkSouls1.isChosen) chosenBosses.push(...darkSouls1Bosses)
  if (gamesStore.chosenGames.darkSouls2.isChosen) chosenBosses.push(...darkSouls2Bosses)
  if (gamesStore.chosenGames.darkSouls3.isChosen) chosenBosses.push(...darkSouls3Bosses)
  if (gamesStore.chosenGames.bloodborne.isChosen) chosenBosses.push(...bloodborneBosses)
  if (gamesStore.chosenGames.eldenRing.isChosen) chosenBosses.push(...eldenRingBosses)

  return chosenBosses
})

const guessedBosses = ref([])
const remainingBosses = computed(() => {
  return bosses.value.filter(boss => !guessedBosses.value.some(guess => guess.name === boss.name));
})

const search = ref('')
const records = ref([])
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

const wasGuessed = ref(false)
const wasFailed = ref(false)

function validateGuess(boss) {
  // Add to guessed bosses
  guessedBosses.value.unshift(boss);

  // Clear search value
  search.value = ''

  // Check if guess is correct
  if (boss.name === correct.value.name) {
    // Set correct vaules
    for (const property in correct.value) known.value[property] = correct.value[property]
    if (correct.value.weaknesses.length === 0) known.value.hasNo.weaknesses = true
    if (correct.value.resistances.length === 0) known.value.hasNo.resistances = true

    // Trigger succesful events
    wasGuessed.value = true;

    // Add to records
    updateRecords(boss.name, guessedBosses.value.length, JSON.parse(JSON.stringify(chosenGames.value)));
  } else {
    // Validate game, health and souls
    if (boss.game === correct.value.game) known.value.game = correct.value.game
    if (boss.health === correct.value.health) known.value.health = correct.value.health
    if (boss.souls === correct.value.souls) known.value.souls = correct.value.souls

    // Validate weaknesses and resistances
    const damageArrays = ['weaknesses', 'resistances']
    damageArrays.forEach((damageArray) => {
      if (boss[damageArray].toString() === correct.value[damageArray].toString()) {
        // Set boolean to true no weaknesses/resistances
        if (boss[damageArray].length === 0) {
          known.value.hasNo[damageArray] = true
          // Set correct weaknesses/resistances
        } else {
          known.value[damageArray] = correct.value[damageArray]
        }
      } else if (boss[damageArray].length === 1) {
        const damage = boss[damageArray][0]
        // If correct boss contains the one weakness/resistance and it is not already added
        if (correct.value[damageArray].includes(damage) && !known.value[damageArray].includes(damage)) {
          const guessedIndex = damageTypes.value.findIndex(damageType => damageType === damage)
          const knownIndex1 = damageTypes.value.findIndex(damageType => damageType === known.value[damageArray][0])
          const knownIndex2 = damageTypes.value.findIndex(damageType => damageType === known.value[damageArray][1])

          // If 0 known weaknesses/resistances
          if (known.value[damageArray].length === 0) {
            known.value[damageArray].push(damage)
          }

          // If 1 known weakness/resistance
          else if (known.value[damageArray].length === 1) {
            if (guessedIndex < knownIndex1) known.value[damageArray].splice(0, 0, damage)
            if (guessedIndex > knownIndex1) known.value[damageArray].splice(1, 0, damage)
          }

          // If 2 known weaknesses/resistances
          else if (known.value[damageArray].length === 2) {
            if (guessedIndex < knownIndex1 && guessedIndex < knownIndex2) known.value[damageArray].splice(0, 0, damage)
            if (guessedIndex > knownIndex1 && guessedIndex < knownIndex2) known.value[damageArray].splice(1, 0, damage)
            if (guessedIndex > knownIndex1 && guessedIndex > knownIndex2) known.value[damageArray].splice(2, 0, damage)
          }
        }
      }
    })
  }
}

function updateRecords(name, guesses, games) {
  // Add to array
  records.value.push({
    name: name,
    guesses: guesses,
    games: games
  })

  // Sort array by guesses
  records.value.sort((record1, record2) => record1.guesses - record2.guesses)

  // Cap records at 10 entries
  records.value = records.value.slice(0, 10)
}

function giveUp() {
  // Clear search value
  search.value = ''

  // Trigger failure events
  wasFailed.value = true

  // Add to guessed bosses
  guessedBosses.value.unshift(correct.value)

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
  guessedBosses.value.splice(0)
  wasGuessed.value = false
  wasFailed.value = false

  // Generate new boss
  correct.value = { ...bosses.value[Math.floor(Math.random() * bosses.value.length)] }

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

watch(() => modals.isOpen, () => {
  // Prevent scrolling while modals is open
  document.querySelector("body").classList = (modals.isOpen ? 'overflow-hidden' : '')
})

watch(records, () => {
  // Save records to localStorage
  localStorage.setItem('records', JSON.stringify(records.value));
})

onMounted(() => {
  // Get stored records
  if (localStorage.getItem('records')) records.value = JSON.parse(localStorage.getItem('records'))

  // Get stored games
  if (localStorage.getItem('games')) {
    const savedGames = JSON.parse(localStorage.getItem('games'))

    for (const game in savedGames) gamesStore.chosenGames[game].isChosen = savedGames[game].isChosen
  }

  if (gamesStore.noGamesChosen.value) {
    modals.open('bosses')
  }

  // Start first game
  newGame()
})
</script>
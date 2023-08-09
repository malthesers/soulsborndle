<template>
  <main class="max-w-5xl mx-auto p-2 m-2 xs:my-8">
    <!-- Button group -->
    <div class="grid grid-cols-2 sm:flex gap-4 mb-4">
      <Button @click="wasFailed = true, guessedBosses.unshift(correct), search = ''" text="New Game"/>
      <Button @click="showModal['instructions'] = true" text="Instructions"/>
      <Button @click="showModal['records'] = true" text="Records"/>
      <Button @click="showModal['games'] = true" text="Games"/>
    </div>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4">
      <!-- Left side container -->
      <KnownInfo :known="known" />
      <!-- Right side container -->
      <div class="w-full">
        <BossSearch
          @guessEntered="(boss) => validateGuess(boss)"
          @updateSearch="(value) => search = value"
          :bosses="remainingBosses"
          :search="search"
          :wasGuessed="wasGuessed"
        />
        <TransitionGroup :name="wasFailed ? 'failed' : 'guess'" tag="div" mode="out-in" class="flex flex-col gap-4">
          <BossGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct" class="failed-fade"/>
        </TransitionGroup>
      </div>
    </div>
    <!-- Effects -->
    <GuessedEffect @hideEffect="newGame" :wasGuessed="wasGuessed"/>
    <FailedEffect @hideEffect="newGame" :wasFailed="wasFailed"/>
    <!-- Modals -->
    <InstructionsModal @hideInstructions="showModal['instructions'] = false" :showInstructions="showModal['instructions']"/>
    <RecordsModal @hideRecords="showModal['records'] = false" @resetRecords="records = []" :showRecords="showModal['records']" :records="records"/>
    <GamesModal @hideGames="showModal['games'] = false" @newGame="newGame" :showGames="showModal.games" :chosenGames="chosenGames"/>
  </main>
</template>

<script setup>
import demonsSoulsBosses from '../bosses/demons-souls.json'
import darkSouls1Bosses from '../bosses/dark-souls-1.json'
import darkSouls2Bosses from '../bosses/dark-souls-2.json'
import darkSouls3Bosses from '../bosses/dark-souls-3.json'
import bloodborneBosses from '../bosses/bloodborne.json'
import eldenRingBosses from '../bosses/elden-ring.json'

const chosenGames = ref({
  demonsSouls: {
    name: "Demon's Souls",
    isChosen: true
  },
  darkSouls1: {
    name: "Dark Souls 1",
    isChosen: true
  },
  bloodborne: {
    name: "Bloodborne",
    isChosen: true
  },
  darkSouls2: {
    name: "Dark Souls 2",
    isChosen: true
  },
  eldenRing: {
    name: "Elden Ring",
    isChosen: true
  },
  darkSouls3: {
    name: "Dark Souls 3",
    isChosen: true
  },
})
const onlyOneGameChosen = computed(() => {
  let chosenGamesCount = 0;

  for (const game in chosenGames.value) {
    if (chosenGames.value[game].isChosen === true) chosenGamesCount++;
  }

  return (chosenGamesCount === 1 ? true : false)
})

const bosses = computed(() => {
  let chosenBosses = []

  if (chosenGames.value.demonsSouls.isChosen) chosenBosses.push(...demonsSoulsBosses)
  if (chosenGames.value.darkSouls1.isChosen) chosenBosses.push(...darkSouls1Bosses)
  if (chosenGames.value.darkSouls2.isChosen) chosenBosses.push(...darkSouls2Bosses)
  if (chosenGames.value.darkSouls3.isChosen) chosenBosses.push(...darkSouls3Bosses)
  if (chosenGames.value.bloodborne.isChosen) chosenBosses.push(...bloodborneBosses)
  if (chosenGames.value.eldenRing.isChosen) chosenBosses.push(...eldenRingBosses)

  return chosenBosses
})

const guessedBosses = ref([])
const remainingBosses = computed(() => {
  return bosses.value.filter(boss => !guessedBosses.value.includes(boss));
})

const search = ref('')
const records = ref([])
const correct = ref({})
const known = ref({
  name: '???',
  game: '???',
  souls: '?',
  health: '?',
  weaknesses: [],
  resistances: [],
  hasNoWeaknesses: false,
  hasNoResistances: false
})

const wasGuessed = ref(false)
const wasFailed = ref(false)
const showModal = ref({
  instructions: false,
  records: false,
  games: false
})
const modalOpen = computed(() => {
  return Object.values(showModal.value).some(modal => modal === true)
})

function validateGuess(boss) {
  // Add to guessed bosses
  guessedBosses.value.unshift(boss);

  // Clear search value
  search.value = ''

  // Check if guess is correct
  if (boss.name === correct.value.name) {
    // Set correct vaules
    known.value.name = correct.value.name;
    known.value.game = correct.value.game;
    known.value.health = correct.value.health;
    known.value.souls = correct.value.souls;
    known.value.weaknesses = correct.value.weaknesses
    known.value.resistances = correct.value.resistances

    // Trigger succesful events
    wasGuessed.value = true;

    // Add to records
    updateRecords(boss.name, guessedBosses.value.length, JSON.parse(JSON.stringify(chosenGames.value)));
  } else {
    // Validate game
    if (boss.game === correct.value.game) known.value.game = correct.value.game

    // Validate health
    if(boss.health === correct.value.health) known.value.health = correct.value.health

    // Validate souls
    if (boss.souls === correct.value.souls) known.value.souls = correct.value.souls

    // Validate weaknesses
    if (boss.weaknesses.toString() === correct.value.weaknesses.toString()) {
      // Set boolean to true if no weaknesses, otherwise update weaknesses array
      if (boss.weaknesses.length === 0) {
        known.value.hasNoWeaknesses = true
      } else {
        known.value.weaknesses = correct.value.weaknesses
      }
    } else {
      correct.value.weaknesses.forEach(weakness => {
        // If guessed boss has 1 weakness part of the answer, add it to known weaknesses if not already added
        if (boss.weaknesses.includes(weakness) && boss.weaknesses.length === 1 && !known.value.weaknesses.includes(weakness)) {
          known.value.weaknesses.push(weakness)
        }
      })
    }

    // Validate resistances
    if (boss.resistances.toString() === correct.value.resistances.toString()) {
      // Set boolean to true if no resistances, otherwise update resistances array
      if (boss.resistances.length === 0) {
        known.value.hasNoResistances = true
      } else {
        known.value.resistances = correct.value.resistances
      }
    } else {
      correct.value.resistances.forEach(resistance => {
        // If guessed boss has 1 resistance part of the answer, add it to known resistances if not already added
        if (boss.resistances.includes(resistance) && boss.resistances.length === 1 && !known.value.resistances.includes(resistance)) {
          known.value.resistances.push(resistance)
        }
      })
    }
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

function newGame() {
  // Clear search value
  search.value = ''

  // Clear guesses
  guessedBosses.value.splice(0)
  wasGuessed.value = false
  wasFailed.value = false

  // Generate new boss
  correct.value = {...bosses.value[Math.floor(Math.random() * bosses.value.length)]}

  // Reset known info
  known.value.name = '???'
  known.value.game = (onlyOneGameChosen.value ? correct.value.game : '???')
  known.value.souls = '?'
  known.value.health = '?'
  known.value.weaknesses = []
  known.value.resistances = []
  known.value.hasNoWeaknesses = false
  known.value.hasNoResistances = false
}

watch(modalOpen, () => {
  const body = document.querySelector("body");

  if (modalOpen.value) {
    body.classList = 'overflow-hidden'
  } else {
    body.classList = ''
  }
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

    for (const game in savedGames) {
      chosenGames.value[game].isChosen = savedGames[game].isChosen
    }
  }

  // Start first game
  newGame()
})
</script>

<style scoped>
.failed-enter-active,
.failed-leave-active {
  transition: opacity 2500ms ease-in;
}

.guess-enter-active,
.guess-leave-active {
  transition: opacity 250ms ease-in;
}

.failed-enter-from,
.faield-leave-to,
.guess-enter-from,
.guess-leave-to {
  opacity: 0;
}
</style>
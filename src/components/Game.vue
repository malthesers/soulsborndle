<template>
  <main class="max-w-5xl mx-auto p-2 m-2 xs:my-8">
    <!-- Button group -->
    <div class="grid grid-cols-2 sm:flex gap-4 mb-4">
      <Button @click="newGame" text="New Game"/>
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
        <TransitionGroup name="guess" tag="div" mode="out-in" class="flex flex-col gap-4">
          <BossGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
        </TransitionGroup>
      </div>
    </div>
    <!-- Modals -->
    <GuessedEffect @hideEffect="newGame" :wasGuessed="wasGuessed"/>
    <InstructionsModal @hideInstructions="showModal['instructions'] = false" :showInstructions="showModal['instructions']"/>
    <RecordsModal @hideRecords="showModal['records'] = false" @resetRecords="records.splice(0)" :showRecords="showModal['records']" :records="records"/>
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
  souls: 0,
  soulsMin: 0,
  soulsMax: 999999,
  health: 0,
  healthMin: 0,
  healthMax: 99999,
  weaknesses: [],
  resistances: []
})

const wasGuessed = ref(false);
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
    known.value.name = boss.name;
    known.value.game = boss.game;
    known.value.health = boss.health;
    known.value.souls = boss.souls;

    // Trigger succesful events
    wasGuessed.value = true;

    // Add to records
    updateRecords(boss.name, guessedBosses.value.length, JSON.parse(JSON.stringify(chosenGames.value)));
  } else {

    // Validate game
    if (boss.game === correct.value.game) known.value.game = boss.game

    // Validate health
    if(boss.health === correct.value.health) {
      known.value.health = boss.health
    } else if (boss.health < correct.value.health && boss.health > known.value.healthMin) {
      known.value.healthMin = boss.health + 1
    } else if (boss.health > correct.value.health && boss.health < known.value.healthMax) {
      known.value.healthMax = boss.health - 1
    }

    // Validate souls drop
    if (boss.souls === correct.value.souls) {
      known.value.souls = boss.souls
    } else if (boss.souls < correct.value.souls && boss.souls > known.value.soulsMin) {
      known.value.soulsMin = boss.souls + 1
    } else if (boss.souls > correct.value.souls && boss.souls < known.value.soulsMax) {
      known.value.soulsMax = boss.souls - 1
    }

    // Validate weaknesses
    if (boss.weaknesses.toString() === correct.value.weaknesses.toString()) {
      known.value.weaknesses = boss.weaknesses
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
      known.value.resistances = boss.resistances
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
  wasGuessed.value = false;

  // Generate new boss
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)]

  // Reset known info
  known.value.name = '???'
  known.value.game = (onlyOneGameChosen.value ? correct.value.game : '???')
  known.value.souls = 0
  known.value.soulsMin = 0
  known.value.soulsMax = 999999
  known.value.health = 0
  known.value.healthMin = 0
  known.value.healthMax = 99999
  known.value.weaknesses.splice(0)
  known.value.resistances.splice(0)
}

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

  newGame()
})
</script>
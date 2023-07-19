<template>
  <main class="max-w-5xl mx-auto p-2 my-8">
    <div class="grid xs:flex gap-4 mb-4">
      <Button @click="resetGame" text="New Game"/>
      <Button @click="showInstructions = true" text="Instructions"/>
      <Button @click="showRecords = true" text="Records"/>
      <Button @click="showGames = true" text="Games"/>
      <!-- <Button @click="wasGuessed = true" text="Test fade"/> -->
    </div>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4">
      <KnownInfo :known="known" />
      <div class="w-full">
        <BossSearch @guessEntered="(boss) => validateGuess(boss)" :bosses="remainingBosses" :wasGuessed="wasGuessed"/>
        <div class="flex flex-col gap-4">
          <BossCardGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
        </div>
      </div>
    </div>
    <InstructionsModal @hideInstructions="showInstructions = false" :showInstructions="showInstructions"/>
    <RecordsModal @hideRecords="showRecords = false" @resetRecords="records = []" :showRecords="showRecords" :records="records"/>
    <GamesModal @hideGames="showGames = false" :showGames="showGames" :chosenGames="chosenGames"/>
    <GuessedEffect @hideEffect="resetGame" :wasGuessed="wasGuessed"/>
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
  demonsSouls: true,
  darkSouls1: true,
  darkSouls2: true,
  darkSouls3: true,
  bloodborne: true,
  eldenRing: true
})

const bosses = computed(() => {
  let chosenBosses = []

  if (chosenGames.value.demonsSouls) chosenBosses.push(...demonsSoulsBosses)
  if (chosenGames.value.darkSouls1) chosenBosses.push(...darkSouls1Bosses)
  if (chosenGames.value.darkSouls2) chosenBosses.push(...darkSouls2Bosses)
  if (chosenGames.value.darkSouls3) chosenBosses.push(...darkSouls3Bosses)
  if (chosenGames.value.bloodborne) chosenBosses.push(...bloodborneBosses)
  if (chosenGames.value.eldenRing) chosenBosses.push(...eldenRingBosses)

  return chosenBosses
})

const guessedBosses = ref([])
const remainingBosses = computed(() => {
  return bosses.value.filter(boss => !guessedBosses.value.includes(boss));
})
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
const showInstructions = ref(false);
const showRecords = ref(false);
const showGames = ref(false);


function validateGuess(boss) {
  guessedBosses.value.unshift(boss);
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
    updateRecords(boss.name, guessedBosses.value.length);
  } else {

    // Validate name
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

function updateRecords(name, guesses) {
  // Add to array
  records.value.push({
    name: name,
    guesses: guesses
  })

  // Sort array by guesses
  records.value.sort((record1, record2) => record1.guesses - record2.guesses)

  // Cap records at 10 entries
  records.value = records.value.slice(0, 10)
}

function resetGame() {
  // Clear guesses
  guessedBosses.value = []
  wasGuessed.value = false;
  // Clear known
  known.value = {
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
  }
  // Generate new boss
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)]
}

watch(records, () => {
  // Save to localStorage
  localStorage.setItem('records', JSON.stringify(records.value));
})

onMounted(() => {
  // Set random boss to guess
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)];
  // Fetch stored records
  records.value = JSON.parse(localStorage.getItem('records')) || []
})
</script>
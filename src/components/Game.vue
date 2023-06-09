<template>
  <main class="max-w-5xl mx-auto p-2 my-8">
    <div class="grid xs:flex gap-4 mb-4">
      <Button @click="resetGame" text="New Game"/>
      <Button @click="showInstructions = true" text="Instructions"/>
      <Button @click="showRecords = true" text="Records"/>
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
    <GuessedEffect @hideEffect="resetGame" :wasGuessed="wasGuessed"/>
  </main>
</template>

<script setup>
import bossData from '../bosses/test-bosses.js'
import demonsSoulsBosses from '../bosses/demons-souls.js'
import darkSouls1Bosses from '../bosses/dark-souls-1.js'
import darkSouls2Bosses from '../bosses/dark-souls-2.js'
import darkSouls3Bosses from '../bosses/dark-souls-3.js'
import bloodborneBosses from '../bosses/bloodborne.js'
import eldenRingBosses from '../bosses/elden-ring.js'
// const bosses = ref(bossData)
const bosses = ref(
  [ ...demonsSoulsBosses,
    ...darkSouls1Bosses, 
    ...darkSouls2Bosses, 
    ...darkSouls3Bosses, 
    ...bloodborneBosses,
    ...eldenRingBosses
  ]
 )

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
})

const wasGuessed = ref(false);
const showInstructions = ref(false);
const showRecords = ref(false);


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
    if (JSON.stringify(boss.weaknesses) === JSON.stringify(correct.value.weaknesses)) known.value.weaknesses = boss.weaknesses;

    // Validate resistances
    if (JSON.stringify(boss.resistances) === JSON.stringify(correct.value.resistances)) known.value.resistances = boss.resistances;
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
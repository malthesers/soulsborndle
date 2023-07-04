<template>
  <main class="max-w-5xl mx-auto p-2 my-8">
    <button @click="resetGame" class="font-bold border-2 border-white rounded text-xl py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">New Game</button>
    <button @click="showInstructions = true" class="font-bold border-2 border-white rounded text-xl ml-4 py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">Instructions</button>
    <button @click="showRecords = true" class="font-bold border-2 border-white rounded text-xl ml-4 py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">Records</button>
    <button @click="wasGuessed = true" class="font-bold border-2 border-white rounded text-xl ml-4 py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">Test fade</button>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4 mt-4">
      <!-- <BossFrame :known="known" /> -->
      <KnownInfo :known="known" />
      <div class="w-full">
        <BossSearch @guessEntered="(boss) => validateGuess(boss)" :bosses="remainingBosses" :wasGuessed="wasGuessed"/>
        <div class="flex flex-col gap-4">
          <BossCardGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
        </div>
      </div>
    </div>
    <InstructionsModal @hideInstructions="showInstructions = false" :showInstructions="showInstructions"/>
    <RecordsModal @hideRecords="showRecords = false" :showRecords="showRecords" :records="records"/>
    <GuessedEffect @hideEffect="resetGame" :wasGuessed="wasGuessed"/>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import bossData from '../bosses.js'
const bosses = ref(bossData)
const guessedBosses = ref([])
const guessCount = computed(() => {
  return guessedBosses.value.length;
})
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
    updateRecords(boss.name, guessCount.value);
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

onMounted(() => {
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)];
})
</script>
<template>
  <main class="max-w-5xl mx-auto p-2 my-8">
    <button @click="resetGame" class="font-bold border-2 border-white rounded text-xl py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">New Game</button>
    <button @click="showHowTo = true" class="font-bold border-2 border-white rounded text-xl ml-4 py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">How To</button>
    <button @click="wasGuessed = true" class="font-bold border-2 border-white rounded text-xl ml-4 py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">Test fade</button>
    <div class="grid lg:grid-cols-[1fr_3fr] gap-4 mt-4">
      <!-- <BossFrame :known="known" /> -->
      <KnownInfo :known="known" />
      <div class="w-full">
        <BossSearch @guessEntered="(boss) => validateGuess(boss)" :bosses="remainingBosses"/>
        <div class="flex flex-col gap-4">
          <BossCardGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
        </div>
      </div>
    </div>
    <HowToModal @hideHowTo="showHowTo = false" :showHowTo="showHowTo"/>
    <GuessedEffect @hideEffect="resetGame" :wasGuessed="wasGuessed"/>
  </main>
</template>

<script setup>
const bosses = ref([
  // start of test bossess
  {
    name: "bossdawg",
    game: "Demon's Souls",
    health: 88888,
    souls: 888888,
    weaknesses: ['fire', 'fire', 'fire'],
    resistances: ['magic', 'lightning', 'strike']
  },
  {
    name: "bossdawg2",
    game: "Demon's Souls",
    health: 88888,
    souls: 888888,
    weaknesses: ['fire', 'fire', 'fire'],
    resistances: ['magic', 'lightning', 'strike']
  },
  {
    name: "bossdawg3",
    game: "Demon's Souls",
    health: 88888,
    souls: 888888,
    weaknesses: ['fire', 'fire', 'fire'],
    resistances: ['magic', 'lightning', 'strike']
  },
  {
    name: "bossdawg4",
    game: "Demon's Souls",
    health: 88888,
    souls: 888888,
    weaknesses: ['fire', 'fire', 'fire'],
    resistances: ['magic', 'lightning', 'strike']
  },
  // end of test bosses
  {
    name: "Cleric Beast",
    game: "Bloodborne",
    health: 3015,
    souls: 4000,
    weaknesses: ['fire'],
    resistances: ['magic', 'lightning', 'strike']
  },
  {
    name: "Father Gascoigne (Human)",
    game: "Bloodborne",
    health: 2031,
    souls: 1800,
    weaknesses: ['fire'],
    resistances: ['lightning']
  },
  {
    name: "Father Gascoigne (Beast)",
    game: "Bloodborne",
    health: 2031,
    souls: 1800,
    weaknesses: ['fire'],
    resistances: ['magic']
  },
  {
    name: "Blood-starved Beast",
    game: "Bloodborne",
    health: 3470,
    souls: 6600,
    weaknesses: ['fire'],
    resistances: ['magic', 'lightning']
  },
  {
    name: "The Witch of Hemwick",
    game: "Bloodborne",
    health: 2611,
    souls: 11800,
    weaknesses: [],
    resistances: []
  },
  {
    name: "Darkbeast Paarl",
    game: "Bloodborne",
    health: 4552,
    souls: 21000,
    weaknesses: ['magic', 'fire'],
    resistances: ['strike', 'lightning']
  },
  {
    name: "Vicar Amelia",
    game: "Bloodborne",
    health: 5367,
    souls: 15000,
    weaknesses: ['fire'],
    resistances: ['strike']
  },
  {
    name: "Malenia, Blade of Miquella",
    game: "Elden Ring",
    health: 33251,
    souls: 480000,
    weaknesses: ['fire'],
    resistances: ['holy']
  },
])
const guessedBosses = ref([])
const guesses = computed(() => {
  return guessedBosses.value.length;
})
const remainingBosses = computed(() => {
  return bosses.value.filter(boss => !guessedBosses.value.includes(boss));
})
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
const showHowTo = ref(false);

function validateGuess(boss) {
  guessedBosses.value.unshift(boss);
  // Check if guess is correct
  if (boss.name === correct.value.name) {
    known.value.name = boss.name;
    known.value.game = boss.game;
    known.value.health = boss.health;
    known.value.souls = boss.souls;
    wasGuessed.value = true;
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
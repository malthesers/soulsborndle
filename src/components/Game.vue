<template>
  <main class="max-w-6xl mx-auto p-2 my-8">
    <button @click="resetGame" class="bg-zinc-800 border-2 border-white rounded text-xl py-2 px-4 duration-200 hover:bg-zinc-900">New Game</button>
    <div class="grid md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-4 mt-4">
      <BossFrame :known="known" />
      <div>
        <BossSearch @guessEntered="(boss) => validateGuess(boss)" :bosses="remainingBosses"/>
        <div class="flex flex-col gap-4">
          <BossCardGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const bosses = ref([
  {
    name: "Cleric Beast",
    game: "Bloodborne",
    health: 3015,
    souls: 4000,
    weaknesses: ['Fire'],
    resistances: ['Magic', 'Lightning', 'Strike']
  },
  {
    name: "Father Gascoigne (Human)",
    game: "Bloodborne",
    health: 2031,
    souls: 1800,
    weaknesses: ['Fire'],
    resistances: ['Lightning']
  },
  {
    name: "Father Gascoigne (Beast)",
    game: "Bloodborne",
    health: 2031,
    souls: 1800,
    weaknesses: ['Fire'],
    resistances: ['Magic']
  },
  {
    name: "Blood-starved Beast",
    game: "Bloodborne",
    health: 3470,
    souls: 6600,
    weaknesses: ['Fire'],
    resistances: ['Magic', 'Lightning']
  },
  {
    name: "The Witch of Hemwick",
    game: "Bloodborne",
    health: 2611,
    souls: 11800,
    weaknesses: [''],
    resistances: ['']
  },
  {
    name: "Darkbeast Paarl",
    game: "Bloodborne",
    health: 2611,
    souls: 11800,
    weaknesses: ['Magic', 'Fire'],
    resistances: ['Strike', 'Lightning']
  },
  {
    name: "Vicar Amelia",
    game: "Bloodborne",
    health: 5367,
    souls: 15000,
    weaknesses: [''],
    resistances: ['']
  },
  {
    name: "Malenia, Blade of Miquella",
    game: "Elden Ring",
    health: 33251,
    souls: 480000,
    weaknesses: [''],
    resistances: ['']
  },
])
const guessedBosses = ref([])
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
  healthMax: 999999,
})

function validateGuess(boss) {
  guessedBosses.value.unshift(boss);
  // Check if guess is correct
  if (boss.name === correct.value.name) {
    known.value.name = boss.name;
    known.value.game = boss.game;
    known.value.health = boss.health;
    known.value.souls = boss.souls;
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
  }
}

function resetGame() {
  // Clear guesses
  guessedBosses.value = []
  // Clear known
  known.value = {
    name: '???',
    game: '???',
    souls: 0,
    soulsMin: 0,
    soulsMax: 999999,
    health: 0,
    healthMin: 0,
    healthMax: 999999,
  }
  // Generate new boss
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)]
}

onMounted(() => {
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)];
})
</script>
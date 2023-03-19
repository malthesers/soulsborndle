<template>
  <main class="max-w-6xl mx-auto p-4 my-8 grid md:grid-cols-2 gap-4">
    <div class="h-[30rem] bg-boss-hidden bg-cover bg-center backdrop-grayscale flex flex-col text-center justify-end">
      <div class="bg-black bg-opacity-70 p-2">
        <p class="text-3xl">{{ known.name }}</p>
        <div class="flex flex-col sm:flex-row gap-8 text-center justify-center">
          <div class="text-2xl px-2"><span class="text-sm">Game</span><p>{{ known.game }}</p></div>
          <div class="text-2xl px-2"><span class="text-sm">Health</span><p v-if="known.health">{{ known.health.toLocaleString() }}</p><p v-else>{{ known.healthMin.toLocaleString() }} - {{ known.healthMax.toLocaleString() }}</p></div>
          <div class="text-2xl px-2"><span class="text-sm">Souls</span><p v-if="known.souls">{{ known.souls.toLocaleString() }}</p><p v-else>{{ known.soulsMin.toLocaleString() }} - {{ known.soulsMax.toLocaleString() }}</p></div>
        </div>
      </div>
    </div>
    <div>
      <BossSearch @guessEntered="(boss) => validateGuess(boss)" :bosses="bosses"/>
      <div class="flex flex-col gap-4">
        <BossCardGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct"/>
      </div>
    </div>
  </main>
</template>

<script setup>
const correct = ref({})
const bosses = ref([
{
    name: "Cleric Beast",
    game: "Bloodborne",
    health: 3015,
    souls: 4000,
  },
  {
    name: "Father Gascoigne",
    game: "Bloodborne",
    health: 2031,
    souls: 1800,
  },
  {
    name: "Vicar Amelia",
    game: "Bloodborne",
    health: 5367,
    souls: 15000,
  },
  {
    name: "The Witch of Hemwick",
    game: "Bloodborne",
    health: 2611,
    souls: 11800,
  },
  {
    name: "Malenia, Blade of Miquella",
    game: "Elden Ring",
    health: 33251,
    souls: 480000,
  },
])
const guessedBosses = ref([])
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

onMounted(() => {
  correct.value = bosses.value[Math.floor(Math.random() * bosses.value.length)];
})
</script>
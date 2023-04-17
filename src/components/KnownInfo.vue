<template>
  <div class="h-max bg-zinc-900 bg-opacity-60 text-center p-4">
      <!-- <p class="text-3xl p-2">{{ known.name }}</p> -->
      <div class="sm:inline-block lg:block text-2xl mx-4"><span class="text-sm">Game</span><p>{{ known.game }}</p></div>
      <div class="sm:inline-block lg:block text-2xl mx-4"><span class="text-sm">Health</span><p v-if="known.health">{{ known.health.toLocaleString() }}</p><p v-else class="whitespace-nowrap">{{ known.healthMin.toLocaleString() }} - {{ known.healthMax.toLocaleString() }}</p></div>
      <div class="sm:inline-block lg:block text-2xl mx-4"><span class="text-sm">Souls</span><p v-if="known.souls">{{ known.souls.toLocaleString() }}</p><p v-else class="whitespace-nowrap">{{ known.soulsMin.toLocaleString() }} - {{ known.soulsMax.toLocaleString() }}</p></div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>
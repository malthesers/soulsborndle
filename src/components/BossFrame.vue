<template>
  <div class="h-[30rem] bg-boss-hidden bg-cover bg-center flex flex-col text-center justify-end">
    <div class="h-full bg-gradient-to-t from-zinc-900 flex flex-col justify-end">
      <p class="text-3xl p-2">{{ known.name }}</p>
      <div class="grid md:grid-cols-3 gap-2 text-center justify-center p-2">
        <div class="text-2xl px-2"><span class="text-sm">Game</span><p>{{ known.game }}</p></div>
        <div class="text-2xl px-2"><span class="text-sm">Health</span><p v-if="known.health">{{ known.health.toLocaleString() }}</p><p v-else>{{ known.healthMin.toLocaleString() }} - {{ known.healthMax.toLocaleString() }}</p></div>
        <div class="text-2xl px-2"><span class="text-sm">Souls</span><p v-if="known.souls">{{ known.souls.toLocaleString() }}</p><p v-else>{{ known.soulsMin.toLocaleString() }} - {{ known.soulsMax.toLocaleString() }}</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>
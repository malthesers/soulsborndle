<template>
  <div class="lg:min-w-[27rem] h-[30rem]  bg-cover bg-center flex flex-col text-center justify-end">
    <div class="h-full bg-gradient-to-t from-zinc-900 flex flex-col justify-end">
      <p class="text-3xl p-2">{{ known.name }}</p>
      <div class="text-center justify-center p-2">
        <div class="inline-block text-2xl px-4"><span class="text-sm">Game</span><p>{{ known.game }}</p></div>
        <div class="inline-block text-2xl px-4"><span class="text-sm">Health</span><p v-if="known.health">{{ known.health.toLocaleString() }}</p><p v-else class="whitespace-nowrap">{{ known.healthMin.toLocaleString() }} - {{ known.healthMax.toLocaleString() }}</p></div>
        <div class="inline-block text-2xl px-4"><span class="text-sm">Souls</span><p v-if="known.souls">{{ known.souls.toLocaleString() }}</p><p v-else class="whitespace-nowrap">{{ known.soulsMin.toLocaleString() }} - {{ known.soulsMax.toLocaleString() }}</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>
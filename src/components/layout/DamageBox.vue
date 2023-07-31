<template>
  <span class="relative grid w-11 h-11">
    <img class="w-full m-auto p-1 object-cover border-zinc-900 border-4 rounded shadow-inner-dmg peer" :src="`icons/${damageType}.svg`" :alt="damageType">
    <div class="absolute bottom-full left-1/2 bg-zinc-900 mb-1 px-2 py-1 rounded capitalize transform -translate-x-1/2 pointer-events-none duration-200 opacity-0 peer-hover:opacity-100">{{ damageType }}</div>
  </span>
</template>

<script setup>
const props = defineProps({
  damageType: String,
})
</script>
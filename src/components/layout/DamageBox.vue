<template>
  <span class="relative grid w-11 h-11 border-4 border-zinc-900 rounded shadow-inner-dmg group">
    <img class="w-full h-full m-auto p-1 object-cover" :src="`icons/${damageType}.svg`" :alt="damageType">
    <div v-if="hover" class="absolute -top-[110%] left-1/2 bg-zinc-700 px-2 py-1 rounded capitalize transform -translate-x-1/2 pointer-events-none duration-200 opacity-0 group-hover:opacity-100">{{ damageType }}</div>
  </span>
</template>

<script setup>
const props = defineProps({
  damageType: String,
  hover: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <span class="relative grid place-content-center w-11 h-11 border-2 border-zinc-900 shadow-inner-dmg group">
    <img class="w-7" :src="`icons/${damageType}.svg`" :alt="damageType">
    <div v-if="hover" class="absolute -top-[100%] left-1/2 bg-zinc-700 px-2 py-1 rounded capitalize transform -translate-x-1/2 pointer-events-none duration-200 opacity-0 group-hover:opacity-100">{{ damageType }}</div>
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
<template>
  <span class="inline-grid place-content-center w-11 h-11 border-zinc-900 border-4 rounded shadow-inner-dmg">
    <img class="w-full p-1 object-cover" :src="`icons/${damageType}.svg`">
  </span>
</template>

<script setup>
const props = defineProps({
  damageType: String,
})

const damageTypes = ref({
  'magic': 'magic_2',
  'fire': 'fire_2',
  'lightning': 'lightning',
  'dark': 'dark',
  'holy': 'holy_2',
  'physical': 'physical',
  'slash': 'slash',
  'strike': 'strike',
  'thrust': 'thrust'
})
</script>
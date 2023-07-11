<template>
  <!-- <span class="grid w-9 h-9 border-zinc-900 border-4 rounded shadow-inner-dmg">
    <div class="w-full h-full m-auto text-lg text-center leading-relaxed">{{ damageTypes[damageType] }}</div>
  </span> -->
  <!-- <span class="aspect-square border-zinc-900 border-4 rounded shadow-inner-dmg leading-[1.85]">{{ damageTypes[damageType] }}</span> -->
  <span class="inline-grid place-content-center w-11 h-11 border-zinc-900 border-4 rounded shadow-inner-dmg">
    <!-- <img class="w-full p-1 object-cover" :src="`/src/assets/icons/${damageTypes[damageType]}.svg`"> -->
    <img class="w-full p-1 object-cover" :src="`/src/assets/icons/${damageType}.svg`">
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
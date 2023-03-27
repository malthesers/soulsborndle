<template>
  <!-- <span class="grid w-9 h-9 border-zinc-900 border-4 rounded shadow-inner-dmg">
    <div class="w-full h-full m-auto text-lg text-center leading-relaxed">{{ damageTypes[damageType] }}</div>
  </span> -->
  <span class="aspect-square border-zinc-900 border-4 rounded shadow-inner-dmg leading-[1.85]">{{ damageTypes[damageType] }}</span>
</template>

<script setup>
const props = defineProps({
  damageType: String,
})

const damageTypes = ref({
  'magic': '✨',
  'fire': '🔥',
  'lightning': '⚡',
  'dark': '😈',
  'holy': '😇',
  'physical': '⚔️',
  'slash': '🔪',
  'strike': '🔨',
  'thrust': '🏹'
})
</script>
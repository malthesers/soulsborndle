<template>
  <span class="inline-grid border-zinc-900 border-4 rounded w-8 h-8 place-content-center aspect-square shadow-inner-dmg">
    <span class="text-xl">{{ damageTypes[damageType] }}</span>
  </span>
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
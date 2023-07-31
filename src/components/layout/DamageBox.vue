<template>
  <span class="grid w-11 h-11 border-zinc-900 border-4 rounded shadow-inner-dmg">
    <img class="w-full m-auto p-1 object-cover" :src="`icons/${damageType}.svg`" :title="damageType.toUpperCase()" :alt="damageType">
  </span>
</template>

<script setup>
const props = defineProps({
  damageType: String,
})
</script>
<template>
  <button class="font-bold border-2 border-white rounded text-xl py-2 px-4 duration-200 hover:bg-white hover:text-zinc-900">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String
})
</script>
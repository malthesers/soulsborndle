<template>
  <button :class="{'hover:bg-white hover:text-zinc-900' : hover}" class="font-bold border-2 border-white text-xl py-2 px-4 whitespace-nowrap duration-200">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String,
  hover: {
    type: Boolean,
    default: true
  }
})
</script>
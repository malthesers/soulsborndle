<template>
  <button :class="{'focus-visible:bg-white focus-visible:text-zinc-900 hover:bg-white hover:text-zinc-900' : hover}" class="font-bold border-2 border-white sm:text-xl py-2 px-4 whitespace-nowrap duration-200 focus:outline-none">{{ text }}</button>
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
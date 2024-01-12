<template>
  <div class="sm:min-w-[5rem] w-full text-xl p-1">
    <p class="text-sm capitalize">{{ value }}</p>
    <p class="leading-[2.2]">{{ count.toLocaleString() }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  value: 'health' | 'souls'
}>()
</script>

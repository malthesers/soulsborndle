<template>
  <div :class="count === bossesStore.answer[value] ? 'bg-green-900' : 'bg-red-900'" class="sm:min-w-20 w-full text-xl p-1">
    <p class="text-sm capitalize">{{ value }}</p>
    <p class="leading-[2.2] relative flex justify-center">
      <span>{{ count.toLocaleString() }}</span>
      <span v-if="count !== bossesStore.answer[value]" class="absolute h-full flex flex-col">
        <img v-if="count < bossesStore.answer[value]" src="/src/assets/icons/arrow_up.svg" class="w-2 h-1 m-auto mt-1" />
        <img v-else src="/src/assets/icons/arrow_down.svg" class="w-2 h-1 m-auto mb-1" />
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()
defineProps<{
  count: number
  value: 'health' | 'souls'
}>()
</script>

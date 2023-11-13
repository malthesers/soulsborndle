<template>
  <span class="relative grid w-11 h-11 rounded shadow-inner-dark group">
    <img :src="`icons/${damageType}.svg`" :alt="damageType" class="w-8 m-auto">
    <div v-if="hover"
      class="absolute bottom-full left-1/2 bg-zinc-700 mb-1 px-2 py-1 rounded capitalize transform -translate-x-1/2 pointer-events-none duration-200 opacity-0 group-hover:opacity-100">
      {{ damageType }}</div>
  </span>
</template>

<script setup lang="ts">
import type { DamageType } from '@/interfaces';

interface Props {
  damageType: DamageType,
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hover: true
})
</script>
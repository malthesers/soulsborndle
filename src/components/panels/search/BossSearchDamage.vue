<template>
  <div class="sm:min-w-32 w-full p-1">
    <p class="text-sm">{{ value }}</p>
    <div class="h-11 flex flex-row justify-center gap-1">
      <DamageBox v-for="damageType in damageList" :key="damageType" :damageType="damageType" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DamageType } from '@/types'

defineProps<{
  damageList: DamageType[]
  value: 'weaknesses' | 'resistances'
}>()
</script>

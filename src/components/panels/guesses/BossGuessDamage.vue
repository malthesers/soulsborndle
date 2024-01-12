<template>
  <div :class="backgroundColour" class="sm:min-w-[8rem] w-full p-1">
    <p class="text-sm capitalize">{{ value }}</p>
    <div class="h-11 flex flex-row justify-center gap-1">
      <DamageBox v-for="damageType in damageList" :key="damageType" :damageType="damageType" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DamageType } from '@/types'
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()
const props = defineProps<{
  damageList: DamageType[]
  value: 'weaknesses' | 'resistances'
}>()

const backgroundColour: ComputedRef<'bg-red-900' | 'bg-yellow-700' | 'bg-green-900'> = computed(() => {
  // Check if partially correct or check if completely correct
  const isPartial: boolean = bossesStore.answer[props.value].some((damageType: DamageType) => props.damageList.includes(damageType))
  const isCorrect: boolean = bossesStore.answer[props.value].toString() === props.damageList.toString()

  // ----- If correct = green ----- else if partial = yellow ----- else = red
  return isCorrect ? 'bg-green-900' : isPartial ? 'bg-yellow-700' : 'bg-red-900'
})
</script>

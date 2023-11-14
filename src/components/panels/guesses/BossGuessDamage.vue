<template>
  <div :class="backgroundColour" class="sm:min-w-[8rem] w-full p-1">
    <p class="text-sm capitalize">{{ value }}</p>
    <div class="h-11 flex flex-row justify-center gap-1">
      <DamageBox v-for="damageType in damageList" :key="damageType" :damageType="damageType" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DamageType } from '@/interfaces';
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()
const props = defineProps<{
  damageList: DamageType[],
  value: 'weaknesses' | 'resistances'
}>()

const backgroundColour: ComputedRef<'bg-red-900' | 'bg-yellow-700' | 'bg-green-900'> = computed(() => {
  // Set to red by default
  let backgroundColour: 'bg-red-900' | 'bg-yellow-700' | 'bg-green-900' = 'bg-red-900';

  // Make weaknesses/resistances yellow if partially correct
  if (bossesStore.answer[props.value].some((damageType: DamageType) => props.damageList.includes(damageType))) backgroundColour = 'bg-yellow-700'

  // Make weaknesses/resistances green if completely correct
  if (bossesStore.answer[props.value].toString() === props.damageList.toString()) backgroundColour = 'bg-green-900'

  return backgroundColour
})
</script>
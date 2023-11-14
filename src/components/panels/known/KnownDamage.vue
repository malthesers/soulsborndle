<template>
  <div :class="{ 'lg:mb-2': value === 'weaknesses' }" class="sm:min-w-[8rem] sm:inline-block lg:block">
    <p class="text-sm capitalize">{{ value }}</p>
    <Transition name="known" mode="out-in">
      <p v-if="damageList.length === 0 && !hasNo" class="h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl">?</p>
      <TransitionGroup v-else-if="damageList.length > 0" name="known" tag="div"
        class="h-11 flex flex-row justify-center gap-1">
        <DamageBox v-for="weakness in damageList" :key="weakness" :damageType="weakness" />
      </TransitionGroup>
      <p v-else class="h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl">None</p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { DamageType } from '@/interfaces';

defineProps<{
  hasNo: boolean,
  damageList: DamageType[],
  value: 'weaknesses' | 'resistances'
}>()
</script>
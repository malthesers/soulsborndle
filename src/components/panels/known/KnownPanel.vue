<template>
  <div class="lg:sticky top-0 h-max sm:flex sm:gap-1 justify-center lg:block text-center bg-zinc-900 bg-opacity-60 p-2">
    <!-- Known game -->
    <div class="sm:inline-block lg:block mb-2 sm:mb-0">
      <p class="text-sm">Game</p>
      <Transition name="known" mode="out-in">
        <p class="sm:min-w-[10rem] sm:h-11 sm:leading-[2.2] whitespace-nowrap text-xl lg:text-2xl"
          :key="bossesStore.known.game">
          {{ bossesStore.known.game }}</p>
      </Transition>
    </div>
    <!-- Known health & souls container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-1 lg:block mb-2 sm:mb-0">
      <!-- Known health -->
      <KnownCount :count="bossesStore.known.health" value="health" />
      <!-- Known souls -->
      <KnownCount :count="bossesStore.known.souls" value="souls" />
    </div>
    <!-- Known weaknesses & resistances container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-1 lg:block">
      <!-- Known weaknesses -->
      <KnownDamage :hasNo="bossesStore.known.hasNo.weaknesses" :damageList="bossesStore.known.weaknesses"
        value="weaknesses" />
      <!-- Known restistances -->
      <KnownDamage :hasNo="bossesStore.known.hasNo.resistances" :damageList="bossesStore.known.resistances"
        value="resistances" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()
</script>

<style>
.known-enter-active,
.known-leave-active {
  transition: all 350ms ease-out;
}

.known-enter-from,
.known-leave-to {
  opacity: 0;
}
</style>
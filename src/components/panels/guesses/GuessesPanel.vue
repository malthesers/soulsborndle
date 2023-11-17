<template>
  <TransitionGroup :name="modalStore.showing['failed'] ? 'failed' : 'guess'" tag="div" mode="out-in"
    class="flex flex-col gap-4 min-h-[40rem] sm:min-h-0">
    <BossGuess v-for="boss in bossesStore.guessedBosses" :key="boss.name" :boss="boss" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore'

const bossesStore = useBossesStore()
const modalStore = useModalStore()
</script>

<style scoped>
.failed-enter-active,
.failed-leave-active {
  transition: opacity 2500ms ease-in;
}

.guess-enter-active,
.guess-leave-active {
  transition: opacity 250ms ease-in;
}

.failed-enter-from,
.failed-leave-to,
.guess-enter-from,
.guess-leave-to {
  opacity: 0;
}
</style>
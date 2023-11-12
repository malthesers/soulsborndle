<template>
  <TransitionGroup :name="modalStore.showing['failed'] ? 'failed' : 'guess'" tag="div" mode="out-in"
    class="flex flex-col gap-4 min-h-[40rem] sm:min-h-0">
    <BossGuess v-for="boss in guessedBosses" :key="boss.name" :boss="boss" :correct="correct" class="failed-fade" />
  </TransitionGroup>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore'

const props = defineProps({
  guessedBosses: Array,
  correct: Object,
})

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
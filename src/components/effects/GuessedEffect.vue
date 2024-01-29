<template>
  <EffectTemplate :showEffect="modalStore.showing['guessed']" :hideEffect="hideGuessed">
    <div
      class="grid grid-cols-[1fr] grid-rows-[1fr] place-content-center py-12 bg-vertical-fade text-4xl sm:text-5xl md:text-7xl text-center *:col-[1/1] *:row-[1/1] *:whitespace-nowrap *:transform"
    >
      <p class="text-zinc-700 scale-y-[165%] tracking-[3px] md:tracking-[6px]">{{ guessedText }}</p>
      <p class="text-zinc-600 scale-y-[160%] tracking-[2px] md:tracking-[4px]">{{ guessedText }}</p>
      <p class="text-zinc-500 scale-y-[155%] tracking-[1px] md:tracking-[2px]">{{ guessedText }}</p>
      <p class="text-zinc-100 scale-y-[150%]">{{ guessedText }}</p>
    </div>
  </EffectTemplate>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'

defineEmits(['hideEffect'])

const props = defineProps<{
  newGame: () => void
}>()

const modalStore = useModalStore()
const guessedText: Ref<string> = ref('BOSS GUESSED')

function hideGuessed(): void {
  modalStore.close('guessed')
  props.newGame()
}
</script>

<style scoped>
.effect-enter-active p:nth-of-type(1),
.effect-enter-active p:nth-of-type(2),
.effect-enter-active p:nth-of-type(3) {
  transition: letter-spacing 2.5s;
  transition-delay: 0.5s;
}

.effect-enter-from p:nth-of-type(1),
.effect-enter-from p:nth-of-type(2),
.effect-enter-from p:nth-of-type(3) {
  letter-spacing: 1px;
}
</style>

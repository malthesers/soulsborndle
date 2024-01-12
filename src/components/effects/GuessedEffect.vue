<template>
  <Teleport to="body">
    <Transition name="guessed">
      <div
        v-if="modalStore.showing['guessed']"
        ref="guessedEffect"
        @click="$emit('hideEffect')"
        @keydown.enter="$emit('hideEffect')"
        @keydown.esc="$emit('hideEffect')"
        tabindex="0"
        class="fixed z-20 top-0 w-full h-dvh bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer"
      >
        <div
          class="grid grid-cols-[1fr] grid-rows-[1fr] place-content-center py-12 vertical-fade text-4xl sm:text-5xl md:text-7xl text-center [&>p]:col-[1/1] [&>p]:row-[1/1] [&>p]:whitespace-nowrap [&>p]:transform"
        >
          <p class="text-zinc-700 scale-y-[165%] tracking-[3px] md:tracking-[6px]">{{ guessedText }}</p>
          <p class="text-zinc-600 scale-y-[160%] tracking-[2px] md:tracking-[4px]">{{ guessedText }}</p>
          <p class="text-zinc-500 scale-y-[155%] tracking-[1px] md:tracking-[2px]">{{ guessedText }}</p>
          <p class="text-zinc-100 scale-y-[150%]">{{ guessedText }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'

defineEmits(['hideEffect'])

const modalStore = useModalStore()
const guessedText: Ref<string> = ref('BOSS GUESSED')
const guessedEffect: Ref<HTMLDivElement | null> = ref(null)

watch(guessedEffect, (newValue) => {
  // Focus effect to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>

<style scoped>
.guessed-enter-active {
  transition: opacity 3s ease;
}

.guessed-enter-from {
  opacity: 0;
}

.guessed-enter-active p:nth-of-type(1),
.guessed-enter-active p:nth-of-type(2),
.guessed-enter-active p:nth-of-type(3) {
  transition: letter-spacing 2.5s;
  transition-delay: 0.5s;
}

.guessed-enter-from p:nth-of-type(1),
.guessed-enter-from p:nth-of-type(2),
.guessed-enter-from p:nth-of-type(3) {
  letter-spacing: 1px;
}
</style>

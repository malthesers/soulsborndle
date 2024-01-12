<template>
  <Teleport to="body">
    <Transition name="failed">
      <div
        v-if="modalStore.showing['failed']"
        ref="failedEffect"
        @click="$emit('hideEffect')"
        @keydown.enter="$emit('hideEffect')"
        @keydown.esc="$emit('hideEffect')"
        tabindex="0"
        class="fixed z-20 top-0 w-full h-dvh bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer"
      >
        <div class="grid grid-cols-[1fr] grid-rows-[1fr] place-content-center py-12 vertical-fade text-4xl sm:text-5xl md:text-7xl text-center">
          <p class="col-[1/1] row-[1/1] z-20 whitespace-nowrap text-red-900 brightness-100 transform scale-y-[150%]">
            {{ failedText }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'

defineEmits(['hideEffect'])

const modalStore = useModalStore()
const failedText: Ref<string> = ref('YOU FAILED')
const failedEffect: Ref<HTMLDivElement | null> = ref(null)

watch(failedEffect, (newValue) => {
  // Focus effect to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>

<style scoped>
.failed-enter-active {
  transition: opacity 3s ease;
}

.failed-enter-from {
  opacity: 0;
}
</style>

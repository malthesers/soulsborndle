<template>
  <Teleport to="body">
    <Transition name="effect">
      <div
        v-if="showEffect"
        ref="effectRef"
        @click="hideEffect"
        @keydown.enter="hideEffect"
        @keydown.esc="hideEffect"
        tabindex="0"
        class="fixed z-20 top-0 w-full h-dvh bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer"
      >
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineEmits(['hideEffect'])
defineProps<{
  showEffect: boolean
  hideEffect: () => void
}>()

const effectRef: Ref<HTMLDivElement | null> = ref(null)

watch(effectRef, (newValue) => {
  // Focus effect to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>

<style scoped>
.effect-enter-active {
  transition: opacity 3s ease;
}

.effect-enter-from {
  opacity: 0;
}
</style>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="showModal"
        ref="modalRef"
        tabindex="0"
        @click.self="closeModal"
        class="fixed z-20 top-0 w-full h-dvh bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2"
      >
        <!-- Game selector panel -->
        <div class="overflow-auto w-full max-w-xl max-h-[80%] mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl">{{ title }}</p>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  showModal: boolean
  closeModal: () => void
}>()

const modalRef: Ref<HTMLDivElement | null> = ref(null)

watch(modalRef, (newValue) => {
  // Focus modal to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>

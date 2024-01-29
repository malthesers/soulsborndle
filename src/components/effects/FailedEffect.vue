<template>
  <EffectTemplate :showEffect="modalStore.showing['failed']" :hideEffect="hideFailed">
    <div class="grid grid-cols-[1fr] grid-rows-[1fr] place-content-center py-12 bg-vertical-fade text-4xl sm:text-5xl md:text-7xl text-center">
      <p class="col-[1/1] row-[1/1] z-20 whitespace-nowrap text-red-900 brightness-100 transform scale-y-[150%]">
        {{ failedText }}
      </p>
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
const failedText: Ref<string> = ref('YOU FAILED')

function hideFailed(): void {
  modalStore.close('failed')
  props.newGame()
}
</script>

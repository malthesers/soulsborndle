<template>
  <EffectTemplate :showEffect="modalStore.showing['failed']" :hideEffect="hideFailed">
    <p class="grid-center whitespace-nowrap transform z-20 text-red-900 scale-y-[150%]">{{ failedText }}</p>
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

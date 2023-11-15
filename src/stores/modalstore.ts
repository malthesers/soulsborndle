import { defineStore } from 'pinia'
import type { Ref, ComputedRef } from 'vue'

interface Modals {
  instructions: boolean,
  records: boolean,
  bosses: boolean,
  guessed: boolean,
  failed: boolean,
}

export const useModalStore = defineStore('modalStore', () => {
  const showing:Ref<Modals> = ref({
    instructions: false,
    records: false,
    bosses: false,
    guessed: false,
    failed: false
  })
  
  const isOpen: ComputedRef<boolean> = computed(() => {
    return Object.values(showing.value).some(modal => modal === true)
  })

  function open(modal:keyof Modals): void {
    showing.value[modal] = true
  }

  function close(modal:keyof Modals): void {
    showing.value[modal] = false
  }

  return {
    showing,
    isOpen,
    open,
    close
  }
})

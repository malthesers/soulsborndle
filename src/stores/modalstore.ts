import { defineStore } from 'pinia'
import { type Ref } from 'vue'

interface Modals {
  instructions: boolean,
  records: boolean,
  bosses: boolean,
  guessed: boolean,
  failed: boolean,
}

export const useModalStore = defineStore('modalStore', () => {
  const showModal:Ref<Modals> = ref({
    instructions: false,
    records: false,
    bosses: false,
    guessed: false,
    failed: false
  })
  
  const modalOpen:ComputedRef<boolean> = computed(() => {
    return Object.values(showModal.value).some(modal => modal === true)
  })

  function open(modal:keyof Modals) {
    showModal.value[modal] = true
  }

  function close(modal:keyof Modals) {
    showModal.value[modal] = false
  }

  return {
    showModal,
    modalOpen,
    open,
    close
  }
})

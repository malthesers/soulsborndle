import { defineStore } from 'pinia'
import { type Ref } from 'vue'

interface Modals {
  [key:string]: boolean
}

export const useModalStore = defineStore('modalStore', () => {
  const wasGuessed:Ref<boolean> = ref(false)
  const wasFailed:Ref<boolean> = ref(false)
  const showModal:Ref<Modals> = ref({
    instructions: false,
    records: false,
    bosses: false
  })
  
  const modalOpen:ComputedRef<boolean> = computed(() => {
    return Object.values(showModal.value).some(modal => modal === true)
  })

  return {
    wasGuessed,
    wasFailed,
    showModal,
    modalOpen
  }
})

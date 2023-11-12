import { defineStore } from 'pinia'
import { bosses } from '../bosses'

export const useBossesStore = defineStore('bossesStore', () => {
  const allBosses = ref(bosses)
  const guessedBosses = ref([])

  return {
    allBosses,
    guessedBosses
  }
})

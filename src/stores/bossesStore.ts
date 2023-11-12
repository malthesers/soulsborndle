import { defineStore } from 'pinia'
import { bosses } from '../bosses'
import { ref } from 'vue'
import { Boss } from '../interfaces/Boss'

export const useBossesStore = defineStore('bossesStore', () => {
  const allBosses = ref<Boss[]>(bosses)
  const guessedBosses = ref([])

  return {
    allBosses,
    guessedBosses
  }
})

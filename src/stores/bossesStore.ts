import { defineStore } from 'pinia'
import { bosses } from '../bosses'
import { type Ref, ref } from 'vue'
import type { Known } from '../interfaces/Known'
import type { Boss } from '../interfaces/Boss'

export const useBossesStore = defineStore('bossesStore', () => {
  const allBosses:Ref<Boss[]> = ref(bosses)
  const guessedBosses:Ref<Boss[]> = ref([])
  const answer:Ref<Boss | null> = ref(null)
  const known:Ref<Known> = ref({
    name: '?',
    game: '?',
    souls: '?',
    health: '?',
    weaknesses: [],
    resistances: [],
    hasNo: {
      weaknesses: false,
      resistances: false
    }})

  return {
    allBosses,
    guessedBosses,
    answer,
    known
  }
})

import type { Chosen } from '@/interfaces/Chosen'
import { defineStore } from 'pinia'
import { type Ref } from 'vue'

export const useGamesStore = defineStore('gamesStore', () => {
  const chosen:Ref<Chosen> = ref({
    demonsSouls: true,
    darkSouls1: true,
    bloodborne: true,
    darkSouls2: true,
    eldenRing: true,
    darkSouls3: true,
  })
  
  const oneGameChosen:ComputedRef<boolean> = computed(() => {
    // Return true if only one game is chosen
    return Object.values(chosen.value).filter(game => game).length === 1
  })

  const noGamesChosen:ComputedRef<boolean> = computed(() => {
    // Return true if every game is not chosen
    return Object.values(chosen.value).every(game => !game)
  })

  return {
    chosen,
    oneGameChosen,
    noGamesChosen
  }
})

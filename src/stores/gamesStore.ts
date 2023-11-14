import type { ChosenGames } from '@/interfaces/ChosenGames'
import { defineStore } from 'pinia'
import { type Ref } from 'vue'

export const useGamesStore = defineStore('gamesStore', () => {
  const chosen:Ref<ChosenGames> = ref({
    demonsSouls: {
      name: "Demon's Souls",
      isChosen: true
    },
    darkSouls1: {
      name: "Dark Souls 1",
      isChosen: true
    },
    bloodborne: {
      name: "Bloodborne",
      isChosen: true
    },
    darkSouls2: {
      name: "Dark Souls 2",
      isChosen: true
    },
    eldenRing: {
      name: "Elden Ring",
      isChosen: true
    },
    darkSouls3: {
      name: "Dark Souls 3",
      isChosen: true
    },
  })
  
  const oneGameChosen:ComputedRef<boolean> = computed(() => {
    // Return true if only one game is chosen
    return Object.values(chosen.value).filter(game => game.isChosen).length === 1
  })

  const noGamesChosen:ComputedRef<boolean> = computed(() => {
    // Return true if every game is not chosen
    return Object.values(chosen.value).every(game => !game.isChosen)
  })

  return {
    chosen,
    oneGameChosen,
    noGamesChosen
  }
})

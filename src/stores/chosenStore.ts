import { defineStore } from 'pinia'
import { type Ref } from 'vue'

interface ChosenGames {
  [key: string]: {
    name: string
    isChosen: boolean
  }
}

export const useGamesStore = defineStore('gamesStore', () => {
  const chosenGames:Ref<ChosenGames> = ref({
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
    let chosenGamesCount = 0;

    // Check number of chosen games
    for (const game in chosenGames.value) if (chosenGames.value[game].isChosen === true) chosenGamesCount++;

    // Return true if only one game is chosen
    return (chosenGamesCount === 1 ? true : false)
  })

  const noGamesChosen:ComputedRef<boolean> = computed(() => {
    // Return true if every game is not chosen
    return Object.keys(chosenGames.value).every(key => {
      return chosenGames.value[key].isChosen === false
    })
  })

  return {
    chosenGames,
    oneGameChosen,
    noGamesChosen
  }
})

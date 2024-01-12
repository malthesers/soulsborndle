import type { Chosen, Game } from '@/interfaces'
import { defineStore } from 'pinia'
import { type Ref } from 'vue'

export const useGamesStore = defineStore('gamesStore', () => {
  const names: Ref<{ [key: string]: Game }> = ref({
    demonsSouls: "Demon's Souls",
    darkSouls1: 'Dark Souls',
    darkSouls2: 'Dark Souls II',
    darkSouls3: 'Dark Souls III',
    bloodborne: 'Bloodborne',
    eldenRing: 'Elden Ring'
  })

  const chosen: Ref<Chosen> = ref({
    demonsSouls: true,
    darkSouls1: true,
    bloodborne: true,
    darkSouls2: true,
    eldenRing: true,
    darkSouls3: true
  })

  const games: ComputedRef<Game[]> = computed(() => {
    return Object.entries(chosen.value)
      .filter(([_key, value]) => value)
      .map(([key]) => names.value[key])
  })

  const oneGameChosen: ComputedRef<boolean> = computed(() => {
    // Return true if only one game is chosen
    return Object.values(chosen.value).filter((game) => game).length === 1
  })

  const noGamesChosen: ComputedRef<boolean> = computed(() => {
    // Return true if every game is not chosen
    return Object.values(chosen.value).every((game) => !game)
  })

  return {
    names,
    games,
    chosen,
    oneGameChosen,
    noGamesChosen
  }
})

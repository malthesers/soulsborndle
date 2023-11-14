import { useRecordsStore } from '@/stores/recordsStore'
import { useModalStore } from '@/stores/modalStore'
import { useGamesStore } from '@/stores/gamesStore'
import { defineStore } from 'pinia'
import { bosses } from '../bosses'
import { type Ref } from 'vue'
import type { Known } from '../interfaces/Known'
import type { Boss } from '@/interfaces'
import type { DamageType } from '@/interfaces'

export const useBossesStore = defineStore('bossesStore', () => {
  const recordsStore = useRecordsStore()
  const modalStore = useModalStore()
  const gamesStore = useGamesStore()
  const damageTypes:Ref<DamageType[]> = ref(['magic', 'fire', 'lightning', 'dark', 'holy', 'physical', 'slash', 'strike', 'thrust'])
  const allBosses:Ref<Boss[]> = ref(bosses)
  const guessedBosses:Ref<Boss[]> = ref([])
  const answer:Ref<Boss> = ref({
    name: '?',
    game: '?',
    souls: 0,
    health: 0,
    weaknesses: [],
    resistances: [],
  })
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
    }
  })

  function validateGuess(boss:Boss) {
    // Add to guessed bosses
    guessedBosses.value.unshift(boss);
  
    // Check if guess is correct
    if (boss.name === answer.value.name) {
      // Set correct vaules
      Object.entries(answer.value).forEach(([key, value]) => known.value[key as keyof Boss] = value)
      if (answer.value.weaknesses.length === 0) known.value.hasNo.weaknesses = true
      if (answer.value.resistances.length === 0) known.value.hasNo.resistances = true
  
      // Trigger succesful events and add to records
      modalStore.open('guessed')
      recordsStore.updateRecords(boss.name, guessedBosses.value.length, JSON.parse(JSON.stringify(gamesStore.chosen)));
    } else {
      // Validate game, health and souls
      if (boss.game === answer.value.game) known.value.game = answer.value.game
      if (boss.health === answer.value.health) known.value.health = answer.value.health
      if (boss.souls === answer.value.souls) known.value.souls = answer.value.souls
  
      // Validate weaknesses and resistances
      const damageArrays:('weaknesses' | 'resistances')[] = ['weaknesses', 'resistances']
      damageArrays.forEach((damageArray) => {
        // If correct weaknesses/resistances
        if (boss[damageArray].toString() === answer.value[damageArray].toString()) {
          // Set boolean to true if no weaknesses/resistances
          if (boss[damageArray].length === 0) {
            known.value.hasNo[damageArray] = true
            // Set correct weaknesses/resistances
          } else {
            known.value[damageArray] = answer.value[damageArray]
          }
        }
        
        // If guessed boss has exactly 1 weakness/resistance
        else if (boss[damageArray].length === 1) {
          const damageType:DamageType = boss[damageArray][0]
          
          if (damageType === undefined) return
          // If correct boss contains the one weakness/resistance and it is not already added
          if (answer.value[damageArray].includes(damageType) && !known.value[damageArray].includes(damageType)) {
            // Get indices to place damageType properly
            const guessedIndex = damageTypes.value.findIndex(type => type === damageType)
            const knownIndex1 = damageTypes.value.findIndex(type => type === known.value[damageArray][0])
            const knownIndex2 = damageTypes.value.findIndex(type => type === known.value[damageArray][1])
  
            // If 0 known weaknesses/resistances
            if (known.value[damageArray].length === 0) {
              known.value[damageArray].splice(0, 0, damageType)
            }
  
            // If 1 known weakness/resistance
            else if (known.value[damageArray].length === 1) {
              if (guessedIndex < knownIndex1) known.value[damageArray].splice(0, 0, damageType)
              if (guessedIndex > knownIndex1) known.value[damageArray].splice(1, 0, damageType)
            }
  
            // If 2 known weaknesses/resistances
            else if (known.value[damageArray].length === 2) {
              if (guessedIndex < knownIndex1 && guessedIndex < knownIndex2) known.value[damageArray].splice(0, 0, damageType)
              if (guessedIndex > knownIndex1 && guessedIndex < knownIndex2) known.value[damageArray].splice(1, 0, damageType)
              if (guessedIndex > knownIndex1 && guessedIndex > knownIndex2) known.value[damageArray].splice(2, 0, damageType)
            }
          }
        }
      })
    }
  }

  return {
    damageTypes,
    allBosses,
    guessedBosses,
    answer,
    known,
    validateGuess
  }
})

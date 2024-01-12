import type { Chosen } from '@/types'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

interface Record {
  name: string
  guesses: number
  games: Chosen
}

export const useRecordsStore = defineStore('recordsStore', () => {
  const records: Ref<Record[]> = ref([])

  function clearRecords(): void {
    records.value = []
  }

  function updateRecords(name: string, guesses: number, games: Chosen): void {
    // Add to array
    records.value.push({
      name: name,
      guesses: guesses,
      games: games
    })

    // Sort array by guesses
    records.value.sort((record1, record2) => record1.guesses - record2.guesses)

    // Cap records at 10 entries
    records.value = records.value.slice(0, 10)
  }

  return {
    records,
    clearRecords,
    updateRecords
  }
})

<template>
  <div class="relative mb-4">
    <input ref="searchInput" v-model="search" placeholder="Enter boss name..." class="w-full text-black p-2 rounded-none outline-none" />
    <Transition name="fade">
      <div v-if="search.length > 1" class="z-10 absolute w-full max-h-[530px] sm:max-h-[568px] overflow-auto overscroll-contain bg-zinc-700">
        <!-- Boss cards for search results -->
        <BossSearch
          v-for="boss in searchedBosses"
          tabindex="0"
          :key="boss.name"
          :boss="boss"
          @click="enterGuess(boss)"
          @keydown.enter="enterGuess(boss)"
          @keydown.delete="focusInput"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Boss } from '@/types'
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore'
import Fuse from 'fuse.js'

const bossesStore = useBossesStore()
const modalStore = useModalStore()
const searchInput: Ref<HTMLInputElement | null> = ref(null)
const search: Ref<string> = ref('')

const searchedBosses: ComputedRef<Boss[]> = computed(() => {
  // Create fuse searching by name pseudo-approximately
  const fuse = new Fuse(bossesStore.remainingBosses, {
    keys: ['name'],
    threshold: 0.3
  })

  // Return top 10 results retrived from fuse objects
  return fuse.search(search.value, { limit: 10 }).map((result) => result.item)
})

function enterGuess(boss: Boss): void {
  // Validate boss, clear search field and attempt focus
  bossesStore.validateGuess(boss)
  search.value = ''
  focusInput()
}

function focusInput(): void {
  // Don't focus on mobile
  if (screen.width > 669) searchInput.value?.focus()
}

// When guessed or failed effects are applied
modalStore.$subscribe((_mutation, state) => {
  // If opened, clear input
  if (state.showing['guessed'] || state.showing['failed']) search.value = ''
  // If closed, refocus input
  if (!state.showing['guessed'] || !state.showing['failed']) focusInput()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="relative mb-4">
    <input ref="searchInput" v-model="search" placeholder="Enter boss name..."
      class="w-full text-black p-2 rounded-none outline-none">
    <Transition name="fade">
      <div v-if="showSearch"
        class="z-10 absolute w-full max-h-[530px] sm:max-h-[568px] overflow-auto overscroll-contain bg-zinc-700">
        <!-- Boss cards for search results -->
        <BossSearch v-for="boss in searchedBosses" tabindex="0" :key="boss.name" :boss="boss" @click="enterGuess(boss)"
          @keydown.enter="enterGuess(boss)" @keydown.delete="focusInput" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Boss } from '@/interfaces';
import { useBossesStore } from '@/stores/bossesStore'
import { useModalStore } from '@/stores/modalStore';

const bossesStore = useBossesStore()
const modalStore = useModalStore()
const searchInput: Ref<HTMLInputElement | null> = ref(null)
const search: Ref<string> = ref('')
const showSearch: ComputedRef<boolean> = computed(() => search.value.length > 1 ? true : false)

const searchedBosses: ComputedRef<Boss[]> = computed(() => {
  return bossesStore.remainingBosses.filter(boss => boss.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  ).slice(0, 15)
})

function enterGuess(boss: Boss) {
  bossesStore.validateGuess(boss)
  search.value = ''
  focusInput()
}

function focusInput() {
  if (screen.width > 669) searchInput.value?.focus()
}

modalStore.$subscribe((mutation, state) => {
  if (state.showing['guessed'] || state.showing['failed']) search.value = ''
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
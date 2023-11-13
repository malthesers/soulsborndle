<template>
  <div class="relative mb-4">
    <input ref="searchInput" @input="$emit('updateSearch', $event.target.value)" :value="search"
      placeholder="Enter boss name..." class="w-full text-black p-2 rounded-none outline-none">
    <Transition name="fade">
      <div v-if="showSearch"
        class="z-10 absolute w-full max-h-[530px] sm:max-h-[568px] overflow-auto overscroll-contain bg-zinc-700">
        <!-- Boss cards for search results -->
        <BossSearch v-for="boss in searchedBosses" tabindex="0" :key="boss.name" :boss="boss" @click="enterGuess(boss)"
          @keydown.enter="enterGuess(boss)" @keydown.delete="searchInput.focus()" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()

const emits = defineEmits(['updateSearch'])
const props = defineProps({
  bosses: Array,
  search: String,
})

const searchInput = ref(null)
const showSearch = computed(() => props.search.length > 1 ? true : false)

const searchedBosses = computed(() => {
  return props.bosses.filter(boss => boss.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())).slice(0, 15)
})

function enterGuess(boss) {
  bossesStore.validateGuess(boss)
}

watch(() => props.bosses, () => {
  if (screen.width > 669) searchInput.value.focus()
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
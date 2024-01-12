<template>
  <ModalTemplate title="Bosses" :showModal="modalStore.showing['bosses']" :closeModal="hideBosses">
    <p class="mb-2">Below you can choose the games whose bosses will be included.</p>
    <p class="mb-2">Bloodborne does not include Chalice Dungeon bosses, and Elden Ring does not include field bosses.</p>
    <p class="mb-2">Toggling a filter resets the game.</p>
    <p class="mb-2">
      <span>A </span>
      <span class="font-bold text-green-700">green </span>
      <span>background means the game will be </span>
      <span class="font-bold">included </span>
      <span>in the pool of bosses, while a </span>
      <span class="font-bold text-red-700">red </span>
      <span>background means the game will be </span>
      <span class="font-bold">excluded.</span>
    </p>
    <div class="grid grid-cols-2 gap-4 mb-2">
      <SoulsButton
        v-for="(game, key) in gamesStore.chosen"
        :key="key"
        :text="games[key]"
        :class="game ? 'bg-green-900' : 'bg-red-900'"
        class="!px-2 hover:bg-opacity-50"
        :hover="false"
        @click="toggleGame(key)"
      />
    </div>
    <!-- Error message -->
    <Transition name="message">
      <p
        v-if="showErrorMessage"
        :class="{ 'animate-pulse': showErrorMessageExtra }"
        class="text-red-500 drop-shadow-red duration-300 overflow-hidden"
      >
        You must choose at least 1 game.
      </p>
    </Transition>
    <!-- Buttons -->
    <SoulsButton @click="hideBosses" text="Close" class="mt-2" />
  </ModalTemplate>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { useGamesStore } from '@/stores/gamesStore'
import type { Chosen } from '@/interfaces'
import type { Game } from '@/interfaces'

const emits = defineEmits(['newGame'])

const modalStore = useModalStore()
const gamesStore = useGamesStore()
const bossesModal: Ref<HTMLDivElement | null> = ref(null)
const showErrorMessage: Ref<boolean> = ref(false)
const showErrorMessageExtra: Ref<boolean> = ref(false)
const games: Ref<{ [key: string]: Game }> = ref({
  demonsSouls: "Demon's Souls",
  darkSouls1: 'Dark Souls',
  darkSouls2: 'Dark Souls II',
  darkSouls3: 'Dark Souls III',
  bloodborne: 'Bloodborne',
  eldenRing: 'Elden Ring'
})

function hideBosses(): void {
  if (gamesStore.noGamesChosen && !showErrorMessage.value) {
    // Show error message if no games chosen
    showErrorMessage.value = true
  } else if (showErrorMessage.value) {
    // Start error message flashing second time
    showErrorMessageExtra.value = true
  } else {
    // Hide games if at least one game is chosen
    modalStore.close('bosses')
  }
}

function toggleGame(key: keyof Chosen): void {
  // Toggle game and reset error messages
  gamesStore.chosen[key as keyof Chosen] = !gamesStore.chosen[key as keyof Chosen]
  showErrorMessageExtra.value = false
  showErrorMessage.value = false

  // Start new game
  emits('newGame')
}

watch(bossesModal, (newValue) => {
  // Focus modal to allow continuing with keyboard
  if (newValue) newValue.focus()
})

watch(gamesStore.chosen, () => {
  // Save chosen games to localStorage on change
  localStorage.setItem('soulsborndle/games', JSON.stringify(gamesStore.chosen))
})
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: max-height 300ms ease;
  max-height: 2rem;
}

.message-enter-from,
.message-leave-to {
  max-height: 0;
}
</style>

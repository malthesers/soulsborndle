<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showBosses" @click.self="hideGames" class="fixed z-20 top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <!-- Game selector panel -->
        <div class="overflow-auto w-full max-w-xl max-h-[80%] mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl">Bosses</p>
          <p class="mb-2">Below you can choose the games whose bosses will be included.</p>
          <p class="mb-2">Bloodborne does not include Chalice Dungeon bosses, and Elden Ring does not include field bosses.</p>
          <p class="mb-2">Toggling a filter resets the game.</p>
          <p class="mb-2">A <span class="font-bold text-green-700">green</span> background means the game will be <span class="font-bold">included</span> in the pool of bosses, while a <span class="font-bold text-red-700">red</span> background means the game will be <span class="font-bold">excluded.</span></p>
          <div class="grid grid-cols-2 gap-4 mb-2">
            <Button v-for="(game, key) in chosenGames"
              :key="game.name"
              :text="game.name"
              :class="game.isChosen ? 'bg-green-900' : 'bg-red-900'"
              class="!px-2 hover:bg-opacity-50"
              :hover="false"
              @click="toggleGame(key)"
            />
          </div>
          <!-- Error message -->
          <Transition name="message">
            <p v-if="showErrorMessage" :class="{ 'animate-pulse' : showErrorMessageExtra }" class="text-red-500 drop-shadow-red duration-300 overflow-hidden">You must choose at least 1 game.</p>
          </Transition>
          <!-- Buttons -->
          <Button @click="hideGames" text="Close" class="mt-2"/>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideGames', 'newGame'])
const props = defineProps({
  showBosses: Boolean,
  chosenGames: Object,
  noGamesChosen: Boolean
})

const showErrorMessage = ref(false)
const showErrorMessageExtra = ref(false)

function hideGames() {
  if (props.noGamesChosen && !showErrorMessage.value) {
    // Show error message if no games chosen
    showErrorMessage.value = true
  } else if (showErrorMessage.value) {
    // Start error message flashing second time
    showErrorMessageExtra.value = true
  } else {
    // Hide games if at least one game is chosen
    emits('hideGames');
  }
}

function toggleGame(key) {
  // Toggle game
  props.chosenGames[key].isChosen = !props.chosenGames[key].isChosen

  // Reset error messages
  showErrorMessage.value = false
  showErrorMessageExtra.value = false

  // Start new game
  emits('newGame')
}

watch(props.chosenGames, () => {
  // Save chosenGames to localStorage
  localStorage.setItem('games', JSON.stringify(props.chosenGames));
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
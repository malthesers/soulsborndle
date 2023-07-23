<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showGames" @click.self="$emit('hideGames')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-xl mx-auto bg-black p-4 text-center cursor-auto md:text-lg">
          <p class="text-3xl">Games</p>
          <p class="mb-2">Below you can choose the games whose bosses will be included amongst the possible bosses. Toggling a filter resets the game.</p>
          <p class="mb-2">A <span class="font-bold text-red-900">red</span> background means the game will be <span class="font-bold">excluded</span> from the pool of bosses, while a <span class="font-bold text-green-900">green</span> background means the game will be <span class="font-bold">included.</span></p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <Button v-for="(game, key) in chosenGames"
              :key="game.name"
              :text="game.name"
              :class="[game.isChosen ? 'bg-green-900' : 'bg-red-900']"
              class="!px-2 hover:bg-opacity-50"
              :hover="false"
              @click="chosenGames[key].isChosen = !chosenGames[key].isChosen, $emit('newGame')"
            />
          </div>
          <p>{{ noChosenGames }}</p>
          <Button @click="$emit('hideGames')" text="Close"/>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideGames', 'newGame'])
const props = defineProps({
  showGames: Boolean,
  chosenGames: Object
})

const noChosenGames = computed(() => {
  const gamesKeys = Object.keys(props.chosenGames)

  return gamesKeys.every(key => {
    return props.chosenGames[key].isChosen === false
  })
})

watch(props.chosenGames, () => {
  // Save chosenGames to localStorage
  localStorage.setItem('games', JSON.stringify(props.chosenGames));
})
</script>
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showGames" @click.self="$emit('hideGames')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-xl mx-auto bg-black p-4 text-center cursor-auto md:text-lg">
          <p class="text-3xl">Games</p>
          <p class="mb-2">Below you can choose the games whose bosses will be included amongst the possible bosses.</p>
          <div class="grid xs:grid-cols-2 gap-4 mb-4">
            <Button v-for="(game, key) in chosenGames"
              :key="game.name"
              :text="game.name"
              :class="[game.isChosen ? 'bg-green-900' : 'bg-red-900']"
              class="hover:bg-opacity-50"
              :hover="false"
              @click="chosenGames[key].isChosen = !chosenGames[key].isChosen"
            />
          </div>
          <Button @click="$emit('hideGames')" text="New Game"/>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideGames'])
const props = defineProps({
  showGames: Boolean,
  chosenGames: Object
})
</script>
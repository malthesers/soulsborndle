<template>
  <Teleport to="body">
    <Transition name="appear">
      <div v-if="showHowTo" class="fixed top-0 w-full h-screen flex flex-col place-content-center p-2 bg-black bg-opacity-30">
        <div class="w-full max-w-2xl mx-auto bg-black bg-opacity-95 p-4 text-center md:text-lg">
          <p class="text-3xl mb-2">How To</p>
          <p class="mb-2">Enter the name a boss and narrow it down using the hints based on your previous guesses.</p>
          <p>The bosses are from the following games:</p>
          <div class="grid grid-cols-2 mb-2">
            <p v-for="game in games" :key="game">{{ game }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  showHowTo: Boolean
})

const games = ref(['Demon\'s Souls', 'Dark Souls', 'Dark Souls II', 'Dark Souls III', 'Bloodborne', 'Elden Ring'])
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
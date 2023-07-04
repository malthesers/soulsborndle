<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showInstructions" @click.self="$emit('hideInstructions')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-lg mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl mb-2">Instructions</p>
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
const emits = defineEmits(['hideInstructions'])
const props = defineProps({
  showInstructions: Boolean
})

const games = ref(['Demon\'s Souls', 'Dark Souls', 'Dark Souls II', 'Dark Souls III', 'Bloodborne', 'Elden Ring'])
</script>
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showInstructions" @click.self="$emit('hideInstructions')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-xl mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl mb-2">Instructions</p>
          <p class="mb-2">Enter the name a boss and narrow it down using the hints based on your previous guesses.</p>
          <p>The bosses are from the following games:</p>
          <div class="grid grid-cols-2 mb-2">
            <p v-for="game in games" :key="game">{{ game }}</p>
          </div>
          <p class="text-xl mb-2">Damage Types</p>
          <p class="mb-2">Arcane and Bolt are treated as Magic and Lightning, while Blunt and Pierce are treated Blunt and Thrust.</p>
          <div class="mx-auto max-w-fit mb-2 xs:w-full grid grid-cols-2 xs:grid-cols-3 gap-2">
            <p v-for="damageType in damageTypes" :key="damageType" class="flex gap-2">
              <DamageBox :damageType="damageType"/>
              <span class="capitalize my-auto">{{ damageType }}</span>
            </p>
          </div>
          <p><span class="font-bold text-red-900">Red</span> means nothing is correct, <span class="font-bold text-yellow-700">orange</span> means partially correct and <span class="font-bold text-green-900">green</span> completely correct.</p>
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

const games = ref(['Demon\'s Souls', 'Dark Souls', 'Bloodborne', 'Dark Souls II', 'Elden Ring', 'Dark Souls III'])
const damageTypes = ref(['magic', 'fire', 'lightning', 'dark', 'holy', 'physical', 'slash', 'strike', 'thrust'])
</script>
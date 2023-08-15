<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showInstructions" ref="instructionsModal" tabindex="0" @click.self="$emit('hideInstructions')" class="fixed z-20 top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="overflow-auto w-full max-w-xl max-h-[80%] mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl">Instructions</p>
          <!-- General information -->
          <p class="mb-2">Enter the name a boss and narrow it down using the hints based on your previous guesses.</p>
          <p class="mb-2"><span class="font-bold text-red-900">Red</span> means incorrect, <span class="font-bold text-yellow-700">orange</span> means partially correct and <span class="font-bold text-green-900">green</span> completely correct.</p>
          <p class="mb-2">An arrow above health and souls indicates the correct value is higher, while an arrow below indicates it is lower.</p>
          <!-- Bosses information -->
          <p class="text-xl">Bosses</p>
          <p class="mb-2">The bosses below are included by default. You can select the games to include by clicking the <span class="italic">Bosses</span> button.</p>
          <div class="grid grid-cols-2 xs:grid-cols-3 mb-2">
            <p v-for="game in gamesDesktop" :key="game" class="hidden xs:block">{{ game }}</p>
            <p v-for="game in gamesMobile" :key="game" class="xs:hidden">{{ game }}</p>
          </div>
          <!-- Damage type information -->
          <p class="text-xl">Damage Types</p>
          <p class="mb-2">Arcane and Bolt are treated as Magic and Lightning, while Blunt and Pierce are treated Strike and Thrust.</p>
          <div class="mx-auto mb-4 xs:w-full grid grid-cols-2 xs:grid-cols-3 gap-2">
            <p v-for="damageType in damageTypes" :key="damageType" class="flex gap-2">
              <DamageBox :damageType="damageType" :hover="false"/>
              <span class="capitalize my-auto">{{ damageType }}</span>
            </p>
          </div>
          <!-- Buttons -->
          <Button @click="$emit('hideInstructions')" text="Close"/>
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

const instructionsModal = ref(null)
const gamesDesktop = ref(['Demon\'s Souls', 'Bloodborne', 'Elden Ring', 'Dark Souls', 'Dark Souls II', 'Dark Souls III'])
const gamesMobile = ref(['Demon\'s Souls', 'Dark Souls', 'Bloodborne', 'Dark Souls II', 'Elden Ring', 'Dark Souls III'])
const damageTypes = ref(['magic', 'fire', 'lightning', 'dark', 'holy', 'physical', 'slash', 'strike', 'thrust'])

watch(instructionsModal, (newValue) => {
  // Focus modal to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>
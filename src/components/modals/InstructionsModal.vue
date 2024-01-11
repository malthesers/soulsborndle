<template>
  <ModalTemplate title="Instructions" :showModal="modalStore.showing['instructions']" :closeModal="hideInstructions">
    <!-- General information -->
    <p class="mb-2">Enter the name a boss and narrow it down using the hints based on your previous guesses.</p>
    <p class="mb-2">
      <span class="font-bold text-red-900">Red </span>
      <span>means incorrect, </span>
      <span class="font-bold text-yellow-700">orange </span>
      <span>means partially correct and </span>
      <span class="font-bold text-green-900">green </span>
      <span>completely correct.</span>
    </p>
    <p class="mb-2">An arrow above health and souls indicates the correct value is higher, while an arrow below indicates
      it is lower.</p>
    <!-- Bosses information -->
    <p class="text-xl">Bosses</p>
    <p class="mb-2">
      <span>The bosses below are included by default. You can select the games to include by clicking the </span>
      <span class="italic">Bosses </span>
      <span>button.</span>
    </p>
    <div class="grid grid-cols-2 xs:grid-cols-3 mb-2">
      <p v-for="game in gamesDesktop" :key="game" class="hidden xs:block">{{ game }}</p>
      <p v-for="game in gamesMobile" :key="game" class="xs:hidden">{{ game }}</p>
    </div>
    <!-- Damage type information -->
    <p class="text-xl">Damage Types</p>
    <p class="mb-2">Arcane and Bolt are treated as Magic and Lightning, while Blunt and Pierce are treated Strike
      and Thrust.</p>
    <div class="mx-auto mb-4 xs:w-full grid grid-cols-2 xs:grid-cols-3 gap-2">
      <p v-for="damageType in bossesStore.damageTypes" :key="damageType" class="flex gap-2">
        <DamageBox :damageType="damageType" :hover="false" />
        <span class="capitalize my-auto">{{ damageType }}</span>
      </p>
    </div>
    <!-- Buttons -->
    <SoulsButton @click="hideInstructions" text="Close" />
  </ModalTemplate>
</template>

<script setup lang="ts">
import type { Game } from '@/interfaces';
import { useBossesStore } from '@/stores/bossesStore';
import { useModalStore } from '@/stores/modalStore'

const bossesStore = useBossesStore()
const modalStore = useModalStore()
const instructionsModal: Ref<HTMLDivElement | null> = ref(null)
const gamesDesktop: Ref<Game[]> = ref(['Demon\'s Souls', 'Bloodborne', 'Elden Ring', 'Dark Souls', 'Dark Souls II', 'Dark Souls III'])
const gamesMobile: Ref<Game[]> = ref(['Demon\'s Souls', 'Dark Souls', 'Bloodborne', 'Dark Souls II', 'Elden Ring', 'Dark Souls III'])

function hideInstructions(): void {
  modalStore.close('instructions')
}

watch(instructionsModal, (newValue) => {
  // Focus modal to allow continuing with keyboard
  if (newValue) newValue.focus()
})
</script>
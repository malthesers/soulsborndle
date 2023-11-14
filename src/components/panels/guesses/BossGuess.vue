<template>
  <div class="overflow-hidden">
    <p class="bg-zinc-900 text-lg px-2 py-1 text-center whitespace-nowrap">{{ boss.name }}</p>
    <div class="flex flex-col sm:flex-row gap-1 text-center">
      <!-- Guessed boss game -->
      <div :class="boss.game === bossesStore.answer.game ? 'bg-green-900' : 'bg-red-900'"
        class="sm:min-w-[10rem] text-xl p-1">
        <p class="text-sm">Game</p>
        <p class="leading-[2.2]">{{ boss.game }}</p>
      </div>
      <!-- Health & Souls container -->
      <div class="w-full flex gap-1 sm:w-min">
        <!-- Guessed boss health -->
        <div :class="boss.health === bossesStore.answer.health ? 'bg-green-900' : 'bg-red-900'"
          class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Health</p>
          <p class="leading-[2.2] relative flex justify-center">
            <span>{{ boss.health.toLocaleString() }}</span>
            <span v-if="boss.health !== bossesStore.answer.health" class="absolute w-full h-full flex flex-col">
              <img v-if="boss.health < bossesStore.answer.health" src="/src/assets/icons/arrow_up.svg"
                class="w-2 h-1 m-auto mt-1">
              <img v-else src="/src/assets/icons/arrow_down.svg" class="w-2 h-1 m-auto mb-1">
            </span>
          </p>
        </div>
        <!-- Guessed boss souls -->
        <div :class="boss.souls === bossesStore.answer.souls ? 'bg-green-900' : 'bg-red-900'"
          class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Souls</p>
          <p class="leading-[2.2] relative flex justify-center">
            <span>{{ boss.souls.toLocaleString() }}</span>
            <span v-if="boss.souls !== bossesStore.answer.souls" class="absolute h-full flex flex-col">
              <img v-if="boss.souls < bossesStore.answer.souls" src="/src/assets/icons/arrow_up.svg"
                class="w-2 h-1 m-auto mt-1">
              <img v-else src="/src/assets/icons/arrow_down.svg" class="w-2 h-1 m-auto mb-1">
            </span>
          </p>
        </div>
      </div>
      <!-- Weaknesses & Resistances container -->
      <div class="w-full flex gap-1">
        <!-- Guessed boss weaknesses -->
        <BossGuessDamage :damageList="boss.weaknesses" text="Weaknesses" />
        <!-- Guessed boss resistances -->
        <BossGuessDamage :damageList="boss.resistances" text="Resistances" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Boss } from '@/interfaces/Boss';
import { useBossesStore } from '@/stores/bossesStore'

const bossesStore = useBossesStore()
const props = defineProps<{ boss: Boss }>()
</script>
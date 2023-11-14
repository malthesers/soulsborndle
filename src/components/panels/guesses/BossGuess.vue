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
        <BossGuessCount :count="boss.health" value="health" />
        <!-- Guessed boss souls -->
        <BossGuessCount :count="boss.souls" value="souls" />
      </div>
      <!-- Weaknesses & Resistances container -->
      <div class="w-full flex gap-1">
        <!-- Guessed boss weaknesses -->
        <BossGuessDamage :damageList="boss.weaknesses" value="weaknesses" />
        <!-- Guessed boss resistances -->
        <BossGuessDamage :damageList="boss.resistances" value="resistances" />
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
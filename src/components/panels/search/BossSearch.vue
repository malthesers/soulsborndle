<template>
  <article
    class="cursor-pointer overflow-hidden border-b-2 pb-1 outline-none transition duration-200 last:border-b-0 hover:bg-zinc-900 focus:bg-zinc-900">
    <p class="text-lg px-2 py-1 text-center">{{ boss.name }}</p>
    <div class="flex flex-col sm:flex-row gap-1 text-center">
      <!-- Boss game -->
      <div class="sm:min-w-[10rem] text-xl p-1">
        <p class="text-sm">Game</p>
        <p class="leading-[2.2]">{{ boss.game }}</p>
      </div>
      <!-- Health & Souls container -->
      <div class="w-full flex gap-1 sm:w-min">
        <!-- Boss health -->
        <div class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Health</p>
          <p class="leading-[2.2]">{{ boss.health.toLocaleString() }}</p>
        </div>
        <!-- Boss souls -->
        <div class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Souls</p>
          <p class="leading-[2.2]">{{ boss.souls.toLocaleString() }}</p>
        </div>
      </div>
      <!-- Weaknesses & Resistances container -->
      <div class="w-full flex gap-1">
        <!-- Boss weaknesses -->
        <div class="sm:min-w-[8rem] w-full p-1">
          <p class="text-sm">Weaknesses</p>
          <div class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness" />
          </div>
        </div>
        <!-- Boss resistances -->
        <div class="sm:min-w-[8rem] w-full p-1">
          <p class="text-sm">Resistances</p>
          <div class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="resistance in boss.resistances" :key="resistance" :damageType="resistance" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Boss } from '@/interfaces/Boss';

const props = defineProps<{ boss: Boss }>()
</script>
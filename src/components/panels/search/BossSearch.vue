<template>
  <article class="cursor-pointer overflow-hidden border-b-2 pb-1 outline-none transition duration-200 last:border-b-0 hover:bg-zinc-900 focus:bg-zinc-900">
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
        <BossSearchCount :count="boss.health" value="health" />
        <!-- Boss souls -->
        <BossSearchCount :count="boss.souls" value="souls" />
      </div>
      <!-- Weaknesses & Resistances container -->
      <div class="w-full flex gap-1">
        <!-- Boss weaknesses -->
        <BossSearchDamage :damageList="boss.weaknesses" value="weaknesses" />
        <!-- Boss resistances -->
        <BossSearchDamage :damageList="boss.resistances" value="resistances" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Boss } from '@/types'

defineProps<{ boss: Boss }>()
</script>

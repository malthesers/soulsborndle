<template>
  <div>
    <p class="bg-zinc-900 text-lg px-2 py-1 text-center">{{ boss.name }}</p>
    <div class="grid sm:grid-cols-3 text-center">
      <div :class="[boss.game === correct.game ? 'bg-green-900' : 'bg-red-900']" class="text-lg px-2"><span class="text-sm">Game</span><p>{{ boss.game }}</p></div>
      <div :class="[boss.health === correct.health ? 'bg-green-900' : 'bg-red-900']" class="text-lg px-2"><span class="text-sm">Health</span><p>{{ boss.health.toLocaleString() }}</p></div>
      <div :class="[boss.souls === correct.souls ? 'bg-green-900' : 'bg-red-900']" class="text-lg px-2"><span class="text-sm">Souls</span><p>{{ boss.souls.toLocaleString() }}</p></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  correct: Object,
  boss: Object
})
</script>
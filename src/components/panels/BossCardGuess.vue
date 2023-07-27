<template>
  <div>
    <p class="bg-zinc-900 text-lg px-2 py-1 text-center whitespace-nowrap">{{ boss.name }}</p>
    <div class="flex flex-col sm:flex-row gap-1 text-center">
      <!-- Guessed boss game -->
      <div :class="[boss.game === correct.game ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[10rem] text-xl p-1">
        <p class="text-sm">Game</p>
        <p class="leading-[2.2]">{{ boss.game }}</p>
      </div>
      <!-- Guessed boss health -->
      <div :class="[boss.health === correct.health ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[5rem] text-xl p-1">
        <p class="text-sm">Health</p>
        <p class="leading-[2.2]">{{ boss.health.toLocaleString() }}</p>
      </div>
      <!-- Guessed boss souls -->
      <div :class="[boss.souls === correct.souls ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[5rem] text-xl p-1">
        <p class="text-sm">Souls</p>
        <p class="leading-[2.2]">{{ boss.souls.toLocaleString() }}</p>
      </div>
      <!-- Guessed boss weaknesses -->
      <div :class="weakMatch" class="sm:min-w-[8rem] w-full p-1">
        <p class="text-sm">Weaknesses</p>
        <div class="h-11 flex flex-row justify-center gap-1">
          <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness"/>
        </div>
      </div>
      <!-- Guessed boss resistances -->
      <div :class="resMatch" class="sm:min-w-[8rem] w-full p-1">
        <p class="text-sm">Resistances</p>
        <div class="h-11 flex flex-row justify-center gap-1">
          <DamageBox v-for="resistance in boss.resistances" :key="resistance" :damageType="resistance"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  correct: Object,
  boss: Object
})


const weakMatch = computed(() => {
  let bgColor = 'bg-red-900';

  if (props.correct.weaknesses.some(weak => props.boss.weaknesses.includes(weak))) {
    bgColor = 'bg-yellow-700'
  }
  
  if (props.correct.weaknesses.toString() === props.boss.weaknesses.toString()) {
    bgColor = 'bg-green-900'
  }

  return bgColor
})

const resMatch = computed(() => {
  let bgColor = 'bg-red-900';

  if (props.correct.resistances.some(weak => props.boss.resistances.includes(weak))) {
    bgColor = 'bg-yellow-700'
  }
  
  if (props.correct.resistances.toString() === props.boss.resistances.toString()) {
    bgColor = 'bg-green-900'
  }

  return bgColor
})
</script>
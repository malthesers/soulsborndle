<template>
  <div>
    <p class="bg-zinc-900 text-lg px-2 py-1 text-center">{{ boss.name }}</p>
    <div class="flex flex-col sm:flex-row gap-1 text-center">
      <div :class="[boss.game === correct.game ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[8rem] p-1 text-lg">
        <p class="text-sm">Game</p>
        <p class="leading-loose">{{ boss.game }}</p>
      </div>
      <div :class="[boss.health === correct.health ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[5rem] p-1 text-lg">
        <p class="text-sm">Health</p>
        <p class="leading-loose">{{ boss.health.toLocaleString() }}</p>
      </div>
      <div :class="[boss.souls === correct.souls ? 'bg-green-900' : 'bg-red-900']" class="sm:min-w-[5rem] p-1 text-lg">
        <p class="text-sm">Souls</p>
        <p class="leading-loose">{{ boss.souls.toLocaleString() }}</p>
      </div>
      <div :class="weakMatch" class="w-full p-1">
        <p class="text-sm">Weaknesses</p>
        <div class="flex gap-2 justify-center">
          <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness"/>
        </div>
      </div>
      <div :class="resMatch" class="w-full p-1">
        <p class="text-sm">Resistances</p>
        <div class="flex flex-row justify-center gap-1">
          <DamageBox v-for="resistance in boss.resistances" :key="resistance" :damageType="resistance"/>
        </div>
      </div>
    </div>
    <!-- <div class="grid grid-cols-2 gap-1 mt-1 text-center">
      <div :class="weakMatch">
        <span class="text-sm">Weaknesses</span>
        <p><span v-for="weak in boss.weaknesses" :key="weak">{{ weak }}</span></p>
      </div>
      <div :class="resMatch">
        <span class="text-sm">Resistances</span>
        <p><span v-for="res in boss.resistances" :key="res">{{ res }}</span></p>
      </div>
    </div> -->
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
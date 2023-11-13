<template>
  <div class="overflow-hidden">
    <p class="bg-zinc-900 text-lg px-2 py-1 text-center whitespace-nowrap">{{ boss.name }}</p>
    <div class="flex flex-col sm:flex-row gap-1 text-center">
      <!-- Guessed boss game -->
      <div :class="boss.game === correct.game ? 'bg-green-900' : 'bg-red-900'" class="sm:min-w-[10rem] text-xl p-1">
        <p class="text-sm">Game</p>
        <p class="leading-[2.2]">{{ boss.game }}</p>
      </div>
      <!-- Health & Souls container -->
      <div class="w-full flex gap-1 sm:w-min">
        <!-- Guessed boss health -->
        <div :class="boss.health === correct.health ? 'bg-green-900' : 'bg-red-900'"
          class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Health</p>
          <p class="leading-[2.2] relative flex justify-center">
            <span>{{ boss.health.toLocaleString() }}</span>
            <span v-if="boss.health !== correct.health" class="absolute w-full h-full flex flex-col">
              <img v-if="boss.health < correct.health" src="/src/assets/icons/arrow_up.svg" class="w-2 h-1 m-auto mt-1">
              <img v-else src="/src/assets/icons/arrow_down.svg" class="w-2 h-1 m-auto mb-1">
            </span>
          </p>
        </div>
        <!-- Guessed boss souls -->
        <div :class="boss.souls === correct.souls ? 'bg-green-900' : 'bg-red-900'"
          class="sm:min-w-[5rem] w-full text-xl p-1">
          <p class="text-sm">Souls</p>
          <p class="leading-[2.2] relative flex justify-center">
            <span>{{ boss.souls.toLocaleString() }}</span>
            <span v-if="boss.souls !== correct.souls" class="absolute h-full flex flex-col">
              <img v-if="boss.souls < correct.souls" src="/src/assets/icons/arrow_up.svg" class="w-2 h-1 m-auto mt-1">
              <img v-else src="/src/assets/icons/arrow_down.svg" class="w-2 h-1 m-auto mb-1">
            </span>
          </p>
        </div>
      </div>
      <!-- Weaknesses & Resistances container -->
      <div class="w-full flex gap-1">
        <!-- Guessed boss weaknesses -->
        <div :class="weaknessesBgColor" class="sm:min-w-[8rem] w-full p-1">
          <p class="text-sm">Weaknesses</p>
          <div class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness" />
          </div>
        </div>
        <!-- Guessed boss resistances -->
        <div :class="resistancesBgColor" class="sm:min-w-[8rem] w-full p-1">
          <p class="text-sm">Resistances</p>
          <div class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="resistance in boss.resistances" :key="resistance" :damageType="resistance" />
          </div>
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

const weaknessesBgColor = computed(() => {
  // Set to red by default
  let bgColor = 'bg-red-900';

  // Make weaknesses yellow if partially correct
  if (props.correct.weaknesses.some(weak => props.boss.weaknesses.includes(weak))) bgColor = 'bg-yellow-700'

  // Make weaknesses green if completely correct
  if (props.correct.weaknesses.toString() === props.boss.weaknesses.toString()) bgColor = 'bg-green-900'

  return bgColor
})

const resistancesBgColor = computed(() => {
  // Set to red by default
  let bgColor = 'bg-red-900';

  // Make resistances yellow if partially correct
  if (props.correct.resistances.some(weak => props.boss.resistances.includes(weak))) bgColor = 'bg-yellow-700'

  // Make resistances green if completely correct
  if (props.correct.resistances.toString() === props.boss.resistances.toString()) bgColor = 'bg-green-900'

  return bgColor
})
</script>
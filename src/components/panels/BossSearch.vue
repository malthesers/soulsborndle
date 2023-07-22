<template>
  <div class="relative mb-4">
    <input @input="$emit('updateSearch', $event.target.value)" :value="search" :disabled="wasGuessed" placeholder="Enter boss name..." class="w-full text-black p-2 outline-none">
    <div v-if="showSearch" class="absolute w-full max-h-[660px] overflow-auto bg-zinc-700">
      <div v-for="boss in searchedBosses" :key="boss.name" @click="enterGuess(boss)" @keydown.enter="enterGuess(boss)" tabindex="0" class="cursor-pointer border-t-2 shadow-2xl outline-none hover:bg-zinc-900 focus:bg-zinc-900">
          <p class="text-lg px-2 py-1 text-center">{{ boss.name }}</p>
          <div class="flex flex-col sm:flex-row gap-1 text-center">
            <div class="sm:min-w-[10rem] text-xl p-1">
              <p class="text-sm">Game</p>
              <p class="leading-[2.2]">{{ boss.game }}</p>
            </div>
            <div class="sm:min-w-[5rem] text-xl p-1">
              <p class="text-sm">Health</p>
              <p class="leading-[2.2]">{{ boss.health.toLocaleString() }}</p>
            </div>
            <div class="sm:min-w-[5rem] text-xl p-1">
              <p class="text-sm">Souls</p>
              <p class="leading-[2.2]">{{ boss.souls.toLocaleString() }}</p>
            </div>
            <div class="sm:min-w-[8rem] w-full p-1">
              <p class="text-sm">Weaknesses</p>
              <div class="h-11 flex flex-row justify-center gap-1">
                <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness"/>
              </div>
            </div>
            <div class="sm:min-w-[8rem] w-full p-1">
              <p class="text-sm">Resistances</p>
              <div class="h-11 flex flex-row justify-center gap-1">
                <DamageBox v-for="resistance in boss.resistances" :key="resistance" :damageType="resistance"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['guessEntered', 'updateSearch'])
const props = defineProps({
  bosses: Array,
  search: String,
  wasGuessed: Boolean
})

// const search = ref('');
const showSearch = computed(() => {
  // return (search.value.length > 1 ? true : false)
  return (props.search.length > 1 ? true : false)
})

const searchedBosses = computed(() => {
  return props.bosses.filter(boss => boss.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()))
})

function enterGuess (boss) {
  emits('guessEntered', boss)
  document.querySelector("input").focus()
}
</script>
<template>
  <div class="relative mb-4">
    <input ref="input" @input="$emit('updateSearch', $event.target.value)" :value="search"  placeholder="Enter boss name..." class="w-full text-black p-2 outline-none">
    <div v-if="showSearch" class="z-10 absolute w-full max-h-[530px] sm:max-h-[568px] overflow-auto overscroll-contain bg-zinc-700">
      <!-- Boss cards for search results -->
      <div v-for="boss in searchedBosses" :key="boss.name" @click="enterGuess(boss)" @keydown.enter="enterGuess(boss)" tabindex="0" class="cursor-pointer overflow-hidden border-b-2 pb-1 outline-none transition duration-200 last:border-b-0 hover:bg-zinc-900 focus:bg-zinc-900">
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
                <DamageBox v-for="weakness in boss.weaknesses" :key="weakness" :damageType="weakness"/>
              </div>
            </div>
            <!-- Boss resistances -->
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
  </div>
</template>

<script setup>
const emits = defineEmits(['guessEntered', 'updateSearch'])
const props = defineProps({
  bosses: Array,
  search: String,
  wasGuessed: Boolean
})

const input = ref(null)

watch(() => props.bosses, () => {
  input.value.focus()
})

const showSearch = computed(() => {
  return (props.search.length > 1 ? true : false)
})

const searchedBosses = computed(() => {
  return props.bosses.filter(boss => boss.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()))
})

function enterGuess (boss) {
  emits('guessEntered', boss)
}
</script>
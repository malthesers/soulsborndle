<template>
  <div class="relative mb-8">
    <input v-model="search" placeholder="Enter boss name..." class="w-full text-black p-2 outline-none">
    <div v-if="showSearch" class="absolute w-full max-h-72 overflow-auto bg-zinc-700">
      <div v-for="boss in searchedBosses" :key="boss.name" @click="enterGuess(boss)" @keydown.enter="enterGuess(boss)" tabindex="0" class="cursor-pointer border-t-2 shadow-2xl outline-none hover:bg-zinc-900 focus:bg-zinc-900">
        <div>
          <p class="text-lg px-2 py-1 text-center">{{ boss.name }}</p>
          <div class="flex flex-col sm:flex-row gap-1 text-center">
            <div class="min-w-[8rem] text-lg px-4"><span class="text-sm">Game</span><p>{{ boss.game }}</p></div>
            <div class="min-w-[5rem] text-lg px-4"><span class="text-sm">Health</span><p>{{ boss.health.toLocaleString() }}</p></div>
            <div class="min-w-[5rem] text-lg px-4"><span class="text-sm">Souls</span><p>{{ boss.souls.toLocaleString() }}</p></div>
            <div  class="w-full px-2">
              <span class="text-sm">Weaknesses</span>
        <div class="flex gap-2 justify-center"><span v-for="weak in boss.weaknesses" :key="weak">{{ damageTypes[weak] }}</span></div>
            </div>
            <div  class="w-full px-2">
              <span class="text-sm">Resistances</span>
        <div class="flex gap-2 justify-center"><span v-for="res in boss.resistances" :key="res">{{ damageTypes[res] }}</span></div>
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
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['guessEntered'])
const props = defineProps({
  bosses: Array
})

const search = ref('');
const showSearch = computed(() => {
  return (search.value.length > 1 ? true : false)
})

const searchedBosses = computed(() => {
  return props.bosses.filter(boss => boss.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

const damageTypes = ref({
  'magic': '✨',
  'fire': '🔥',
  'lightning': '⚡',
  'dark': '😈',
  'holy': '😇',
  'physical': '⚔️',
  'slash': '🔪',
  'strike': '🔨',
  'thrust': '🏹'
})

function enterGuess (boss) {
  search.value = '';
  emits('guessEntered', boss)
  document.querySelector("input").focus()
}
</script>
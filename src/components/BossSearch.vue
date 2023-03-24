<template>
  <div class="relative mb-8">
    <input v-model="search" placeholder="Enter boss name..." class="w-full text-black p-2 outline-none">
    <div v-if="showSearch" class="absolute w-full max-h-72 overflow-auto bg-zinc-700">
      <div v-for="boss in searchedBosses" :key="boss.name" @click="enterGuess(boss)" @keydown.enter="enterGuess(boss)" tabindex="0" class="cursor-pointer border-t-2 shadow-2xl outline-none hover:bg-zinc-900 focus:bg-zinc-900">
        <div>
          <p class="text-lg px-2 py-1 text-center">{{ boss.name }}</p>
          <div class="grid grid-cols-3 text-center">
            <div class="text-lg px-4"><span class="text-sm">Game</span><p>{{ boss.game }}</p></div>
            <div class="text-lg px-4"><span class="text-sm">Health</span><p>{{ boss.health.toLocaleString() }}</p></div>
            <div class="text-lg px-4"><span class="text-sm">Souls</span><p>{{ boss.souls.toLocaleString() }}</p></div>
          </div>
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

function enterGuess (boss) {
  search.value = '';
  emits('guessEntered', boss)
  document.querySelector("input").focus()
}
</script>
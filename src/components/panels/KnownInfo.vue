<template>
  <div class="lg:sticky top-0 h-max sm:flex justify-center lg:block text-center bg-zinc-900 bg-opacity-60 p-2">
      <div class="sm:inline-block lg:block text-2xl mx-4">
        <span class="text-sm">Game</span>
        <p>{{ known.game }}</p>
      </div>
      <div class="sm:inline-block lg:block text-2xl mx-4">
        <span class="text-sm">Health</span>
        <p v-if="known.health">{{ known.health.toLocaleString() }}</p>
        <p v-else class="whitespace-nowrap">{{ known.healthMin.toLocaleString() }} - {{ known.healthMax.toLocaleString() }}</p>
      </div>
      <div class="sm:inline-block lg:block text-2xl mx-4">
        <span class="text-sm">Souls</span>
        <p v-if="known.souls">{{ known.souls.toLocaleString() }}</p>
        <p v-else class="whitespace-nowrap">{{ known.soulsMin.toLocaleString() }} - {{ known.soulsMax.toLocaleString() }}</p>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Weaknesses</span>
        <TransitionGroup name="damage" tag="div" class="h-10 flex flex-row justify-center gap-1">
          <DamageBox v-for="weakness in known.weaknesses" :key="weakness" :damageType="weakness"/>
        </TransitionGroup>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Resistances</span>
        <div class="h-10 flex flex-row justify-center gap-1">
          <DamageBox v-for="resistance in known.resistances" :key="resistance" :damageType="resistance"/>
        </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>
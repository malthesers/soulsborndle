<template>
  <div class="lg:sticky top-0 h-max sm:flex justify-center lg:block text-center bg-zinc-900 bg-opacity-60 p-2">
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Game</span>
        <Transition name="known" mode="out-in" class="h-10 whitespace-nowrap text-2xl">
          <p :key="known.game">{{ known.game }}</p>
        </Transition>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Health</span>
        <p v-if="known.health">{{ known.health.toLocaleString() }}</p>
        <p v-else class="h-10 whitespace-nowrap text-2xl">
          <Transition name="known" mode="out-in">
            <span :key="known.healthMin">{{ known.healthMin.toLocaleString() }}</span>
          </Transition>
          <span class="px-2">-</span>
          <Transition name="known" mode="out-in">
            <span :key="known.healthMax">{{ known.healthMax.toLocaleString() }}</span>
          </Transition>
        </p>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Souls</span>
        <p v-if="known.souls">{{ known.souls.toLocaleString() }}</p>
        <p v-else class="h-10 whitespace-nowrap text-2xl">
          <Transition name="known" mode="out-in">
            <span :key="known.soulsMin">{{ known.soulsMin.toLocaleString() }}</span>
          </Transition>
          <span class="px-2">-</span>
          <Transition name="known" mode="out-in">
            <span :key="known.soulsMax">{{ known.soulsMax.toLocaleString() }}</span>
          </Transition>
        </p>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Weaknesses</span>
        <TransitionGroup name="known" tag="div" class="h-10 flex flex-row justify-center gap-1">
          <DamageBox v-for="weakness in known.weaknesses" :key="weakness" :damageType="weakness"/>
        </TransitionGroup>
      </div>
      <div class="sm:inline-block lg:block mx-4">
        <span class="text-sm">Resistances</span>
        <TransitionGroup name="known" tag="div" class="h-10 flex flex-row justify-center gap-1">
          <DamageBox v-for="resistance in known.resistances" :key="resistance" :damageType="resistance"/>
        </TransitionGroup>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})

watch(() => props.known.healthMin, () => {
  console.log('min health change')
})
</script>
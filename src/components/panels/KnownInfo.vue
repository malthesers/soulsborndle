<template>
  <div class="lg:sticky top-0 h-max sm:flex sm:gap-4 justify-center lg:block text-center bg-zinc-900 bg-opacity-60 p-2">
    <!-- Known game -->
    <div class="sm:inline-block lg:block">
      <p class="text-sm">Game</p>
      <Transition name="known" mode="out-in" class="lg:h-11 whitespace-nowrap text-xl lg:text-2xl">
        <p :key="known.game">{{ known.game }}</p>
      </Transition>
    </div>
    <!-- Known health & souls container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-4 lg:block">
      <!-- Known health -->
      <div class="sm:inline-block lg:block">
        <p class="text-sm">Health</p>
        <p v-if="known.health" class="text-xl lg:text-2xl">{{ known.health.toLocaleString() }}</p>
        <p v-else class="lg:h-11 whitespace-nowrap text-lg xs:text-xl lg:text-2xl">
          <Transition name="known" mode="out-in">
            <span :key="known.healthMin">{{ known.healthMin.toLocaleString() }}</span>
          </Transition>
          <span class="px-2">-</span>
          <Transition name="known" mode="out-in">
            <span :key="known.healthMax">{{ known.healthMax.toLocaleString() }}</span>
          </Transition>
        </p>
      </div>
      <!-- Known souls -->
      <div class="sm:inline-block lg:block">
        <p class="text-sm">Souls</p>
        <p v-if="known.souls" class="text-xl lg:text-2xl">{{ known.souls.toLocaleString() }}</p>
        <p v-else class="lg:h-11 whitespace-nowrap text-lg xs:text-xl lg:text-2xl">
          <Transition name="known" mode="out-in">
            <span :key="known.soulsMin">{{ known.soulsMin.toLocaleString() }}</span>
          </Transition>
          <span class="px-2">-</span>
          <Transition name="known" mode="out-in">
            <span :key="known.soulsMax">{{ known.soulsMax.toLocaleString() }}</span>
          </Transition>
        </p>
      </div>
    </div>
    <!-- Known weaknesses & resistances container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-4 lg:block">
      <!-- Known weaknesses -->
      <div class="sm:inline-block lg:block mb-4 sm:mb-0 lg:mb-4">
        <p class="text-sm">Weaknesses</p>
        <TransitionGroup name="known" tag="div" class="h-11 flex flex-row justify-center gap-1">
          <DamageBox v-for="weakness in known.weaknesses" :key="weakness" :damageType="weakness"/>
        </TransitionGroup>
      </div>
      <!-- Known restistances -->
      <div class="sm:inline-block lg:block">
        <p class="text-sm">Resistances</p>
        <TransitionGroup name="known" tag="div" class="h-11 flex flex-row justify-center gap-1">
          <DamageBox v-for="resistance in known.resistances" :key="resistance" :damageType="resistance"/>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>
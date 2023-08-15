<template>
  <div class="lg:sticky top-0 h-max sm:flex sm:gap-1 justify-center lg:block text-center bg-zinc-900 bg-opacity-60 p-2">
    <!-- Known game -->
    <div class="sm:inline-block lg:block mb-2 sm:mb-0">
      <p class="text-sm">Game</p>
      <Transition name="known" mode="out-in">
        <p class="sm:min-w-[10rem] sm:h-11 sm:leading-[2.2] whitespace-nowrap text-xl lg:text-2xl" :key="known.game">{{ known.game }}</p>
      </Transition>
    </div>
    <!-- Known health & souls container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-1 lg:block mb-2 sm:mb-0">
      <!-- Known health -->
      <div class="sm:inline-block lg:block">
        <p class="text-sm">Health</p>
        <Transition name="known" mode="out-in">
          <p class="sm:min-w-[5rem] sm:h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl" :key="known.health">{{ known.health.toLocaleString() }}</p>
        </Transition>
      </div>
      <!-- Known souls -->
      <div class="sm:inline-block lg:block">
        <p class="text-sm">Souls</p>
        <Transition name="known" mode="out-in">
          <p class="sm:min-w-[5rem] sm:h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl" :key="known.souls">{{ known.souls.toLocaleString() }}</p>
        </Transition>
      </div>
    </div>
    <!-- Known weaknesses & resistances container -->
    <div class="grid grid-cols-2 sm:flex sm:gap-1 lg:block">
      <!-- Known weaknesses -->
      <div class="sm:min-w-[8rem] sm:inline-block lg:block lg:mb-2">
        <p class="text-sm">Weaknesses</p>
        <Transition name="known" mode="out-in">
          <TransitionGroup v-if="known.weaknesses.length > 0" name="known" tag="div" class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="weakness in known.weaknesses" :key="weakness" :damageType="weakness"/>
          </TransitionGroup>
          <p v-else-if="known.weaknesses.length === 0" class="h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl">?</p>
          <p v-else class="h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl">None</p>
        </Transition>
      </div>
      <!-- Known restistances -->
      <div class="sm:min-w-[8rem] sm:inline-block lg:block">
        <p class="text-sm">Resistances</p>
        <Transition name="known" mode="out-in">
          <p v-if="known.resistances.length === 0" class="h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl">?</p>
          <TransitionGroup v-else name="known" tag="div" class="h-11 flex flex-row justify-center gap-1">
            <DamageBox v-for="resistance in known.resistances" :key="resistance" :damageType="resistance"/>
          </TransitionGroup>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  known: Object
})
</script>

<style scoped>
.known-enter-active,
.known-leave-active {
  transition: all 350ms ease-out;
}

.known-enter-from,
.known-leave-to {
  opacity: 0;
}
</style>
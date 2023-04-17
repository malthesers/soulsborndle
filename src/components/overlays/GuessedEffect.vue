<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="wasGuessed" @click="$emit('hideEffect')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer">
        <div class="grid grid-cols-[1fr] grid-rows-[1fr] place-content-center py-12 vertical-fade text-4xl sm:text-5xl md:text-7xl text-center">
          <!-- <p v-for="n in [3, 2, 1]" :key="n" :class="`text-zinc-${400+n*100} scale-[${100}%_${150+n*5}%]`" class="col-[1/1] row-[1/1] w-full z-10 text-3xl sm:text-5xl md:text-7xl whitespace-nowrap transform">BOSS GUESSED</p> -->
          <p class="col-[1/1] row-[1/1] z-10 whitespace-nowrap text-zinc-700 transform scale-y-[165%] tracking-[3px] sm:tracking-[3px] md:tracking-[6px]">{{ guessedText }}</p>
          <p class="col-[1/1] row-[1/1] z-10 whitespace-nowrap text-zinc-600 transform scale-y-[160%] tracking-[2px] sm:tracking-[2px] md:tracking-[4px]">{{ guessedText }}</p>
          <p class="col-[1/1] row-[1/1] z-10 whitespace-nowrap text-zinc-500 transform scale-y-[155%] tracking-[1px] sm:tracking-[1px] md:tracking-[2px]">{{ guessedText }}</p>
          <p class="col-[1/1] row-[1/1] z-20 whitespace-nowrap text-zinc-100 transform scale-y-[150%]">{{ guessedText }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  wasGuessed: Boolean
})

const guessedText = ref('BOSS GUESSED');
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active p:nth-of-type(1),
.fade-enter-active p:nth-of-type(2),
.fade-enter-active p:nth-of-type(3) {
  transition: letter-spacing 2.5s;
  transition-delay: 0.5s;
}
.fade-enter-from p:nth-of-type(1),
.fade-enter-from p:nth-of-type(2),
.fade-enter-from p:nth-of-type(3) {
  letter-spacing: 1px;
}
</style>
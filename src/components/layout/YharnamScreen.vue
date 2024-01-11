<template>
  <div class="fixed -z-10 top-0 w-full h-dvh filter brightness-50">
    <div class="yharnam-layer bg-[20%_center] bg-[url('/src/assets/background/1_moon.svg')]"></div>
    <div class="yharnam-layer bg-[5%_center] bg-[url('/src/assets/background/2_background.svg')]"></div>
    <div class="yharnam-layer bg-center bg-[url('/src/assets/background/3_bg-light.svg')]"></div>
    <div class="yharnam-layer bg-[30%_center] bg-[url('/src/assets/background/4_middleground.svg')]"></div>
    <div class="yharnam-layer bg-center bg-[url('/src/assets/background/5_mg-light.svg')]"></div>
    <div class="yharnam-layer bg-[10%_center] bg-[url('/src/assets/background/6_foreground.svg')]"></div>
  </div>
</template>

<style lang="postcss" scoped>
.yharnam-layer {
  @apply absolute top-0 w-full h-full bg-cover;
}
</style>
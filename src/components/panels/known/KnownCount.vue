<template>
  <div class="sm:inline-block lg:block">
    <p class="text-sm capitalize">{{ value }}</p>
    <Transition name="known" mode="out-in">
      <p class="sm:min-w-[5rem] sm:h-11 sm:leading-[2.2] text-lg xs:text-xl lg:text-2xl" :key="count">
        {{ count.toLocaleString() }}
      </p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number | '?'
  value: 'health' | 'souls'
}>()
</script>

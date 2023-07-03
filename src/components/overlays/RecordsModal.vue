<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showRecords" @click="$emit('hideRecords')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-max mx-auto bg-black p-4 text-center md:text-lg">
          <p class="text-3xl">Records</p>
          <table class="w-full text-left border-separate border-spacing-2">
            <thead>
              <tr>
                <th>Guesses</th>
                <th>Boss</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 10" :key="n">
                <td>{{ n }}</td>
                <td>Lorian, Elder Prince and Lothric, Younger Prince</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideRecords'])
const props = defineProps({
  showRecords: Boolean
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
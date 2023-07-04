<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showRecords" @click.self="$emit('hideRecords')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-lg mx-auto bg-black p-4 text-center cursor-auto md:text-lg">
          <p class="text-3xl">Records</p>
          <p v-if="records.length === 0">You have not guessed a boss yet.</p>
          <div v-else>
            <p>Listed below is your 10 fastest guessed bosses sorted by amount of guesses.</p>
            <table class="w-full text-left border-separate border-spacing-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Boss</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="record in records" :key="`${record.guesses}-${record.name}`">
                  <td>{{ record.guesses }}</td>
                  <td>{{ record.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideRecords'])
const props = defineProps({
  showRecords: Boolean,
  records: Array,
})


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
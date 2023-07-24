<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showRecords" @click.self="$emit('hideRecords')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-xl mx-auto bg-black p-4 text-center cursor-auto md:text-lg">
          <p class="text-3xl">Records</p>
          <p v-if="records.length === 0" class="mb-2">You have not guessed a boss yet.</p>
          <div v-else>
            <p class="mb-2">Listed below is your 10 fastest guessed bosses sorted by amount of guesses.</p>
            <table class="w-full text-left mb-2 border-separate border-spacing-1">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Boss</th>
                  <th v-for="abbr in abbreviations" :key="abbr">{{ abbr }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="record in records" :key="`${record.guesses}-${record.name}`">
                  <td>{{ record.guesses }}</td>
                  <td>{{ record.name }}</td>
                  <th :class="[record.games['demonsSouls'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                  <th :class="[record.games['darkSouls1'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                  <th :class="[record.games['darkSouls2'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                  <th :class="[record.games['darkSouls3'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                  <th :class="[record.games['bloodborne'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                  <th :class="[record.games['eldenRing'].isChosen ? 'bg-green-900' : 'bg-red-900']"></th>
                </tr>
              </tbody>
            </table>
            <div class="flex gap-4 justify-center">
              <Button @click="$emit('resetRecords')" text="Clear records"/>
              <Button @click="$emit('hideRecords')" text="Close"/>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideRecords', 'resetRecords'])
const props = defineProps({
  showRecords: Boolean,
  records: Array,
})

const abbreviations = ref(['DeS', 'DS1', 'DS2', 'DS3', 'BB', 'ER'])
</script>
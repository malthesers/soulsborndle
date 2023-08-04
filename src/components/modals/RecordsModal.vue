<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showRecords" @click.self="$emit('hideRecords')" class="fixed z-20 top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="overflow-auto w-full max-w-xl max-h-[75%] mx-auto bg-black p-4 text-center md:text-lg cursor-auto">
          <p class="text-3xl">Records</p>
          <p class="mb-2">Listed below are your 10 fastest victories sorted by amount of guesses. On the right, you see the games chosen when you set the record.</p>
          <Transition name="message">
            <p v-if="records.length === 0" class="font-bold overflow-hidden">You have not guessed a boss yet.</p>
          </Transition>
          <Transition name="records">
            <div v-if="records.length !== 0" class="overflow-hidden max-h-96">
              <table class="w-full text-left text-base mb-2">
                <thead>
                  <tr>
                    <th class="hidden xs:table-cell px-2 text-center">#</th>
                    <th class="hidden xs:table-cell">Boss</th>
                    <th v-for="(game, key) in games" :key="key"
                      class="hidden xs:table-cell text-center w-9 border-l-4 border-black"
                    >{{ game }}</th>
                  </tr>
                </thead>
                <tbody v-for="record in records" :key="`${record.guesses}-${record.name}`" class="bg-zinc-900 border-black border-b-8">
                  <!-- Desktop row -->
                  <tr>
                    <td class="px-2 text-center">{{ record.guesses }}</td>
                    <td class="xs:hidden" colspan="5">{{ record.name }}</td>
                    <td class="hidden xs:table-cell" colspan="1">{{ record.name }}</td>
                    <td v-for="(game, key) in games" :key="key"
                      :class="[record.games[key].isChosen ? 'bg-green-900' : 'bg-red-900']"
                      class="hidden xs:table-cell border-l-4 border-black"
                    ></td>
                  </tr>
                  <!-- Mobile row -->
                  <tr class="xs:hidden">
                    <td
                      v-for="(game, key) in games" :key="key"
                      :class="[record.games[key].isChosen ? 'bg-green-900' : 'bg-red-900']"
                      class="w-1/6 text-center"
                    ><span>{{ game }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Transition>
          <div class="flex gap-4 justify-center mt-2">
            <Button v-if="records.length !== 0" @click="$emit('resetRecords')" text="Clear records"/>
            <Button @click="$emit('hideRecords')" text="Close"/>
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

const games = ref({
  demonsSouls: 'DeS',
  darkSouls1: 'DS',
  darkSouls2: 'DS2',
  darkSouls3: 'DS3',
  bloodborne: 'BB',
  eldenRing: 'ER'
})
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: max-height 300ms ease;
  transition-delay: 750ms;
  max-height: 2rem;
}

.message-enter-from,
.message-leave-to {
  max-height: 0;
}

.records-enter-active,
.records-leave-active {
  transition: max-height 750ms ease;
}

.records-enter-from,
.records-leave-to {
  max-height: 0;
}
</style>
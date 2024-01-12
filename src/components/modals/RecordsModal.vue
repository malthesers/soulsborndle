<template>
  <ModalTemplate title="Records" :showModal="modalStore.showing['records']" :closeModal="hideRecords">
    <p class="mb-2">
      <span>Listed below are your 10 fastest victories sorted by amount of guesses, </span>
      <span class="text-green-900">green </span>
      <span>indicating the included games and </span>
      <span class="text-red-900">red </span>
      <span>indicating excluded games.</span>
    </p>
    <!-- No bosses guessed message -->
    <Transition name="message">
      <p v-if="recordsStore.records.length === 0" class="font-bold overflow-hidden">You have not guessed a boss yet.</p>
    </Transition>
    <!-- Records table -->
    <Transition name="records">
      <div v-if="recordsStore.records.length !== 0" class="mb-2 overflow-hidden max-h-[38rem] sm:max-h-96">
        <table class="w-full text-left text-base">
          <!-- Table head -->
          <thead>
            <tr>
              <th class="hidden xs:table-cell px-2 text-center">#</th>
              <th class="hidden xs:table-cell">Boss</th>
              <th v-for="(game, key) in games" :key="key"
                class="hidden xs:table-cell text-center w-9 border-l-4 border-black">{{ game }}</th>
            </tr>
          </thead>
          <tbody v-for="record in recordsStore.records" :key="`${record.guesses}-${record.name}`"
            class="bg-zinc-900 border-black border-b-8">
            <!-- Desktop row -->
            <tr>
              <td class="px-2 text-center">{{ record.guesses }}</td>
              <td class="xs:hidden" colspan="5">{{ record.name }}</td>
              <td class="hidden xs:table-cell" colspan="1">{{ record.name }}</td>
              <td v-for="(game, key) in games" :key="key"
                :class="record.games[key as keyof Chosen] ? 'bg-green-900' : 'bg-red-900'"
                class="hidden xs:table-cell border-l-4 border-black"></td>
            </tr>
            <!-- Mobile row -->
            <tr class="xs:hidden">
              <td v-for="(game, key) in games" :key="key"
                :class="record.games[key as keyof Chosen] ? 'bg-green-900' : 'bg-red-900'" class="w-1/6 text-center">
                <span>{{ game }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>
    <!-- Buttons -->
    <div class="flex gap-4 justify-center mt-2">
      <SoulsButton v-if="recordsStore.records.length !== 0" @click="recordsStore.clearRecords()" text="Clear records" />
      <SoulsButton @click="modalStore.close('records')" text="Close" />
    </div>
  </ModalTemplate>
</template>

<script setup lang="ts">
import { useRecordsStore } from '@/stores/recordsStore'
import { useModalStore } from '@/stores/modalStore'
import type { Chosen } from '@/interfaces';

const recordsStore = useRecordsStore()
const modalStore = useModalStore()
const recordsModal: Ref<HTMLDivElement | null> = ref(null)
const games: Ref<{ [key: string]: 'DeS' | 'DS' | 'DS2' | 'DS3' | 'BB' | 'ER' }> = ref({
  demonsSouls: 'DeS',
  darkSouls1: 'DS',
  darkSouls2: 'DS2',
  darkSouls3: 'DS3',
  bloodborne: 'BB',
  eldenRing: 'ER'
})

function hideRecords(): void {
  modalStore.close('records')
}

watch(recordsModal, (newValue) => {
  // Focus modal to allow continuing with keyboard
  if (newValue) newValue.focus()
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
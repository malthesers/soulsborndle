<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showGames" @click.self="$emit('hideGames')" class="fixed top-0 w-full h-screen bg-black bg-opacity-30 flex flex-col place-content-center cursor-pointer p-2">
        <div class="w-full max-w-xl mx-auto bg-black p-4 text-center cursor-auto md:text-lg">
          <p class="text-3xl">Games</p>
          <p class="mb-2">Below you can choose the games whose bosses will be included amongst the possible bosses.</p>
          <div class="grid xs:grid-cols-2 gap-4">
            <Button @click="chosenGames.demonsSouls = !chosenGames.demonsSouls" text="Demon's Souls" :class="[chosenGames.demonsSouls ? 'bg-green-900' : 'bg-red-900']"/>
            <Button @click="chosenGames.darkSouls1 = !chosenGames.darkSouls1" text="Dark Souls" :class="[chosenGames.darkSouls1 ? 'bg-green-900' : 'bg-red-900']"/>
            <Button @click="chosenGames.bloodborne = !chosenGames.bloodborne" text="Bloodborne" :class="[chosenGames.bloodborne ? 'bg-green-900' : 'bg-red-900']"/>
            <Button @click="chosenGames.darkSouls2 = !chosenGames.darkSouls2" text="Dark Souls 2" :class="[chosenGames.darkSouls2 ? 'bg-green-900' : 'bg-red-900']"/>
            <Button @click="chosenGames.eldenRing = !chosenGames.eldenRing" text="Elden Ring" :class="[chosenGames.eldenRing ? 'bg-green-900' : 'bg-red-900']"/>
            <Button @click="chosenGames.darkSouls3 = !chosenGames.darkSouls3" text="Dark Souls 3" :class="[chosenGames.darkSouls3 ? 'bg-green-900' : 'bg-red-900']"/>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(['hideGames'])
const props = defineProps({
  showGames: Boolean,
  chosenGames: Object
})
</script>
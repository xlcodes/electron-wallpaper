<template>
  <main class="flex flex-col h-screen">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <component :is="Component" class="flex-1" />
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style scoped lang="scss"></style>

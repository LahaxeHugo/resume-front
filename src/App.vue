<template>
  <header>
    <Menu />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>

<template>
  <footer>Copyright © {{ year }} Hugo Lahaxe. All rights reserved</footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  border-top: 1px solid var(--color-border);
  width: 95%;
  margin: auto;
}
@media screen and (max-width: 500px) {
  footer {
    font-size: 12px;
  }
}
</style>

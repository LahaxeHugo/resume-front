<template>
  <Title>Formation</Title>
  <div class="skills-wrapper">
    <div v-for="(diploma, index) in diplomas" :key="diploma.name">
      <h3 class="title2">{{ diploma.name }}</h3>
      <p class="title3">{{ diploma.school }}</p>
      <p class="text2">
        {{ diploma['date-from'] }} - {{ diploma['date-to'] }}, {{ diploma.location }}
      </p>
      <p>{{ diploma.description }}</p>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
import DiplomasData from '../data/diplomas.json'

export default {
  components: {
    Title
  },
  data() {
    return {
      diplomas: DiplomasData
    }
  }
}
</script>

<style scoped>
.skills-wrapper > div:nth-child(n + 2) {
  margin-top: 2rem;
}
</style>

<template>
  <Title>Expériences</Title>
  <div class="experiences-wrapper">
    <div v-for="(experience, index) in experiences" :key="experience.name">
      <h3 class="title2">{{ experience.name }}</h3>
      <p class="title3">{{ experience.company }}</p>
      <p class="text2">
        {{ experience['date-from']
        }}{{
          experience['date-from'] !== experience['date-to'] ? ' - ' + experience['date-to'] : ''
        }}, {{ experience.location }}
      </p>
      <ul class="details">
        <li v-for="(detail, index) in experience.details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
import ExperiencesData from '../data/experiences.json'

export default {
  components: {
    Title
  },
  data() {
    return {
      experiences: ExperiencesData
    }
  }
}
</script>

<style scoped>
.experiences-wrapper > div:nth-child(n + 2) {
  margin-top: 1.5rem;
}

.details {
  padding-left: 20px;
}
</style>

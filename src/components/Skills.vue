<template>
  <Title>Compétences</Title>
  <p class="skills-wrapper">
    <span v-for="(skill, index) in skills" :key="skill.name">
      <span :class="{ important: skill.important }">{{ skill.name }}</span>
      <span v-if="index != skills.length - 1">, </span>
    </span>
  </p>
</template>

<script>
import Title from './Title.vue'
import SkillsData from '../data/skills.json'

export default {
  components: {
    Title
  },
  data() {
    return {
      skills: SkillsData
    }
  }
}
</script>

<style scoped>
.skills-wrapper {
  text-align: center;
}
.skills-wrapper span.important {
  color: var(--color-green);
  font-weight: bold;
}
</style>

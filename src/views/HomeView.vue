<template>
  <div class="home">
    <div class="intro-wrapper">
      <div class="image"></div>
      <div>
        <h1 class="title3 name">HUGO LAHAXE</h1>
        <p class="text2 job">Développeur Web Front-End</p>
      </div>
    </div>

    <h2 class="title">Compétences</h2>
    <p class="skills-wrapper">
      <span v-for="(skill, index) in skills" :key="skill.name">
        <span :class="{ important: skill.important }">{{ skill.name }}</span>
        <span v-if="index != skills.length - 1">, </span>
      </span>
    </p>

    <h2 class="title">Formation</h2>
    <div class="diplomas-wrapper">
      <div v-for="(diploma, index) in diplomas" :key="diploma.name">
        <h3 class="title2">{{ diploma.name }}</h3>
        <p class="title3">{{ diploma.school }}</p>
        <p class="text2">
          {{ diploma['date-from'] }} - {{ diploma['date-to'] }}, {{ diploma.location }}
        </p>
        <p>{{ diploma.description }}</p>
      </div>
    </div>

    <h2 class="title">Expériences</h2>
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
  </div>
</template>

<script>
import SkillsData from '@/data/skills.json'
import DiplomasData from '@/data/diplomas.json'
import ExperiencesData from '@/data/experiences.json'

export default {
  data() {
    return {
      skills: SkillsData,
      diplomas: DiplomasData,
      experiences: ExperiencesData
    }
  }
}
</script>

<style scoped>
.intro-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.image {
  background-image: url('@/assets/img/hugo.jpeg');
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-size: 140%;
  background-position: 50% 10%;
  margin-right: 20px;
}
.name {
  font-size: 28px;
  line-height: 24px;
}
.job {
  font-size: 18px;
  margin-bottom: 24px;
}

.skills-wrapper {
  text-align: center;
}
.skills-wrapper span.important {
  color: var(--color-green);
  font-weight: bold;
}

.diplomas-wrapper > div:nth-child(n + 2),
.experiences-wrapper > div:nth-child(n + 2) {
  margin-top: 2rem;
}

.details {
  padding-left: 20px;
}
</style>

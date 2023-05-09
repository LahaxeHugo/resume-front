<template>
  <div class="home">
    <div class="intro-wrapper">
      <div class="image"></div>
      <div>
        <h1 class="title3 name">{{ homeDetails.site_title }}</h1>
        <p class="text2 job">{{ homeDetails.site_subtitle }}</p>
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
        <p class="text2">{{ diploma.dateFrom }} - {{ diploma.dateTo }}, {{ diploma.location }}</p>
        <p>{{ diploma.description }}</p>
      </div>
    </div>

    <h2 class="title">Expériences</h2>
    <div class="experiences-wrapper">
      <div v-for="(experience, index) in experiences" :key="experience.name">
        <h3 class="title2">{{ experience.name }}</h3>
        <p class="title3">{{ experience.company }}</p>
        <p class="text2">
          {{ experience.dateFrom
          }}{{ experience.dateFrom !== experience.dateTo ? ' - ' + experience.dateTo : '' }},
          {{ experience.location }}
        </p>
        <ul class="details">
          <li v-for="(detail, index) in experience.experienceDetails" :key="index">
            {{ detail.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const { skills, diplomas, experiences, homeDetails } = storeToRefs(store)
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
  text-transform: uppercase;
}
.job {
  font-size: 18px;
  margin-bottom: 24px;
}

.skills-wrapper {
  text-align: center;
}
.skills-wrapper span.important {
  color: var(--color-main);
  font-weight: bold;
}

.diplomas-wrapper > div:nth-child(n + 2),
.experiences-wrapper > div:nth-child(n + 2) {
  margin-top: 2rem;
}

.details {
  padding-left: 20px;
}

@media screen and (max-width: 500px) {
  .name {
    font-size: 24px;
  }
  .job {
    font-size: 14px;
  }
}
</style>

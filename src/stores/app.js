import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import axios from 'axios'

export const useAppStore = defineStore('app', () => {
  const error = ref(false)

  const contact = ref({})

  const home = ref({})
  const skills = ref({})
  const diplomas = ref({})
  const experiences = ref({})
  const homeDetails = ref({})

  const fetchContact = async () => {
    if (Object.keys(toRaw(contact.value)).length) return
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + 'contact')
      contact.value = response.data
      error.value = false
    } catch (error) {
      console.log(error)
      error.value = true
    }
  }

  const fetchHome = async () => {
    if (Object.keys(toRaw(home.value)).length) return
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + 'home')
      home.value = response.data
      skills.value = response.data.skills
      diplomas.value = response.data.diplomas
      experiences.value = response.data.experiences
      homeDetails.value = response.data.site_details
      error.value = false
    } catch (error) {
      console.log(error)
      error.value = true
    }
  }

  return {
    error,
    fetchHome,
    homeDetails,
    diplomas,
    experiences,
    skills,
    fetchContact,
    contact
  }
})

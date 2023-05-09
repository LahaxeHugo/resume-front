import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import axios from 'axios'

export const useAppStore = defineStore('app', () => {
  const contacts = ref({})
  const diplomas = ref({})
  const experiences = ref({})
  const skills = ref({})
  const error = ref(false)

  const fetchContacts = async () => {
    if (Object.keys(toRaw(contacts.value)).length) return
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + 'contact')
      contacts.value = response.data
      error.value = false
    } catch (error) {
      console.log(error)
      error.value = true
    }
  }

  return { fetchContacts, contacts, diplomas, experiences, skills, error }
})

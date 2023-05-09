<template>
  <Loader v-if="loading === true" />
  <div class="content" v-else>
    <Header />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in" @enter="enter" @afterEnter="afterEnter" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from './components/Loader.vue'

import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const loading = ref(true)
const store = useAppStore()

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
const init = async () => {
  const before = Date.now()
  await store.fetchHome()
  await store.fetchContact()
  const after = Date.now()
  await delay(1500 - (after - before))
  loading.value = false
}
init()

const enter = (element) => {
  const { height } = getComputedStyle(element)

  element.style.height = 0

  setTimeout(() => {
    element.style.height = height
  })
}

const afterEnter = (element) => {
  element.style.height = 'auto'
}
</script>

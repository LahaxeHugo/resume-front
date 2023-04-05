<template>
  <Header />
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in" @enter="enter" @afterEnter="afterEnter">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = 0

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<template>
  <div class="contact">
    <h1 class="title">Me contacter</h1>
    <div class="contact-wrapper">
      <div class="contact-left">
        <p>
          <a :href="'tel:' + contact.tel" class="link">
            <Phone />
            <span class="link-text">{{ contact.tel }}</span>
          </a>
          <a :href="'mailto:' + contact.email" class="link">
            <Mailbox />
            <span class="link-text">{{ contact.email }}</span>
          </a>
          <a href="#" class="link">
            <City />
            <span class="link-text">{{ contact.location }}</span>
          </a>
        </p>
      </div>
      <div class="contact-right">
        <a :href="contact.github" class="icon-link" :title="contact.github" target="_blank">
          <Github />
        </a>
        <a :href="contact.linkedin" class="icon-link" :title="contact.linkedin" target="_blank">
          <Linkedin />
        </a>
        <a :href="contact.instagram" class="icon-link" :title="contact.instagram" target="_blank">
          <Instagram />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Phone from '@/assets/img/icons/phone.svg'
import Mailbox from '@/assets/img/icons/mailbox.svg'
import City from '@/assets/img/icons/city.svg'
import Github from '@/assets/img/icons/github.svg'
import Linkedin from '@/assets/img/icons/linkedin.svg'
import Instagram from '@/assets/img/icons/instagram.svg'

import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const { contact } = storeToRefs(store)
</script>

<style scoped>
.title {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-left,
.contact-right {
  width: 320px;
  padding: 20px;
}
.contact-left {
  border-right: 1px solid var(--color-border);
}
.contact-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  display: flex;
  align-items: center;
  color: var(--color-text);
  padding: 8px 0;
  transition: color 1s;
}
.link svg {
  transform: scale(1.3);
  width: 25px;
}
.link:hover {
  background-color: unset;
  color: var(--color-main);
}
.link-text {
  margin-left: 15px;
}

.icon-link {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  transition: background-color 1s;
}
.icon-link svg {
  display: block;
  width: 50px;
  height: 50px;
  fill: var(--color-main);
  transition: fill 1s;
}
.icon-link:hover svg {
  fill: var(--color-text);
}

@media (max-width: 1000px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .contact-left {
    border-right: unset;
  }
  .contact-left p {
    width: fit-content;
    margin: auto;
  }
}
</style>

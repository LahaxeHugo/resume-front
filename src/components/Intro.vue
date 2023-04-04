<template>
  <div class="intro-wrapper">
    <div class="image"></div>
    <div>
      <h1 class="title3">HUGO LAHAXE</h1>
      <p class="text2">Développeur Web Front-End</p>
    </div>
  </div>
</template>

<style scoped>
.intro-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.image {
  background-image: url('../assets/hugo.jpeg');
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-size: 140%;
  background-position: 50% 10%;
  margin-right: 20px;
}

.title3 {
  font-size: 28px;
  line-height: 24px;
}
.text2 {
  font-size: 18px;
  margin-bottom: 24px;
}
</style>

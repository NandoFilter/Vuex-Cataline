<template>
  <div>
    <div class="container">
      <transition :name="$transition" mode="out-in">
        <component :is="$actualPage"></component>
      </transition>
    </div>
    <p class="made_by">
      Made by&nbsp;
      <a href="https://github.com/NandoFilter" target="_blank">NandoFilter</a>
    </p>
  </div>
</template>

<script>
import FaqCategories from './components/FaqCategories.vue'
import Questions from './components/Questions.vue'
import Answer from './components/Answer.vue'

export default {
  components: {
    FaqCategories,
    Questions,
    Answer
  },
  computed: {
    $actualPage() {
      return this.$store.getters.$actualPage
    },
    $transition() {
      return this.$store.getters.$transition
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: lato-bold;
  src: url(@/assets/fonts/Lato-Bold.ttf);
}

@font-face {
  font-family: lato-regular;
  src: url(@/assets/fonts/Lato-Regular.ttf);
}

body {
  background-color: #f5f6f8;
  font-family: lato-regular;

  display: grid;

  height: 100vh;

  justify-content: center;
  align-content: center;
}

img {
  pointer-events: none;
}

.container {
  width: 305px;
  height: 460px;

  position: relative;

  border-radius: 15px;

  box-shadow: 0px 10px 30px #3f445266;

  background: linear-gradient(180deg, #3f4452 0%, #26282c 100%) 0% 0% no-repeat
    padding-box;
}

.left-enter-from,
.right-enter-from {
  opacity: 0;
}

.left-enter-active,
.right-enter-active,
.left-leave-active,
.right-leave-active {
  transition: 0.4s;
}

.left-enter-to,
.right-enter-to {
  opacity: 1;
}

.left-leave-from,
.right-leave-from {
  opacity: 1;
}

.left-leave-to,
.right-leave-to {
  opacity: 0;
}

.made_by {
  display: flex;
  justify-content: center;

  font-family: lato-bold;
  color: #3f4452;

  a {
    text-decoration: none;
    color: #2d9fa5;

    cursor: pointer;
  }
}
</style>

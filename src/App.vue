<template>
  <div class="container">
    <transition :name="$transition" mode="out-in">
      <component :is="$actualPage"></component>
    </transition>
  </div>
</template>

<script>
import FaqCategories from './components/FaqCategories.vue'
import Questions from './components/Questions.vue'

export default {
  components: {
    FaqCategories,
    Questions
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
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
  background-color: #f5f6f8;
  font-family: 'Lato';

  display: grid;

  height: 100vh;

  justify-content: center;
  align-content: center;
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
</style>

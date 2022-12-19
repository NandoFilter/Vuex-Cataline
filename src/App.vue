<template>
  <div class="container">
    <FaqCategories></FaqCategories>
  </div>
</template>

<script>
import FaqCategories from './components/FaqCategories.vue'

export default {
  components: {
    FaqCategories
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

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
</style>

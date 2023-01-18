<template>
  <div class="page">
    <div class="head">
      <div class="head__arrow" @click="returnPage">
        <img :src="getReturnIcon()" />
      </div>
      <p class="head__title">{{ $singleQuestion.title }}</p>
    </div>
    <div class="content" v-html="$singleQuestion.content" />
  </div>
</template>

<script>
export default {
  name: 'Answer',
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion
    }
  },
  methods: {
    getReturnIcon() {
      return require('@/assets/images/arrow-left.svg')
    },
    returnPage() {
      this.$store.dispatch('setPage', 'Questions')
      this.$store.dispatch('setTransition', 'right')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0.5rem;
}

.head {
  width: 305px;

  display: grid;
  grid-template-columns: 60px 220px;

  align-items: center;
  justify-content: center;

  color: #f5f6f8;

  &__arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0.4rem 1rem 1rem 0.4rem;
    padding: 5.5px 6px 6px 6px;
    border-radius: 8px;

    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #26282c;
      cursor: pointer;
    }
  }

  &__title {
    margin: 0 0 0.7rem 0;
    font-size: 19px;
  }
}

.content {
  font-size: 14px;
  color: #f5f6f8;

  text-align: justify;

  margin-top: 15px;

  padding: 0 5%;

  &:deep(a) {
    text-decoration: none;
    font-weight: bold;
    color: #58b9bd;
  }
}
</style>

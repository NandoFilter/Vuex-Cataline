<template>
  <div class="page">
    <div class="head">
      <div class="head__arrow" @click="returnPage">
        <img :src="getIcon('arrow-left.svg')" />
      </div>
      <div class="head__content">
        <div class="head__content__texts">
          <h2>{{ $singleCategory.title }}</h2>
          <p>Escolha uma pergunta</p>
        </div>
        <div class="head__content__icon">
          <img :src="getIcon($singleCategory.icon)" />
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div>
      <ul class="questions">
        <li
          class="questions__item"
          v-for="question in $singleCategory.questions"
          :key="question.id"
        >
          {{ question.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  computed: {
    $singleCategory() {
      return this.$store.getters.$singleCategory
    }
  },
  methods: {
    getIcon(item) {
      const img = item.icon != null ? item.icon : item

      return require(`@/assets/images/${img}`)
    },
    returnPage() {
      this.$store.dispatch('changePage', 'FaqCategories')
      this.$store.dispatch('changeTransition', 'right')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 15px;

  color: #f5f6f8;

  &__arrow {
    margin: 0 1.2rem 1.5rem 0;
    padding: 5.5px 6px 3px 6px;
    border-radius: 8px;

    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #26282c;
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 25px;

    &__texts {
      h2 {
        font-size: 20px;
        margin: 20px 0 0 0;
      }

      p {
        margin: 5px 0 0 0;
        font-size: 16px;
      }
    }

    &__icon img {
      width: 1.5rem;
      margin: 2rem 0 0 1.5rem;
    }
  }
}

.line {
  width: 90%;
  border: 1px solid #404451;
  margin: 0;
}

.questions {
  display: flex;
  flex-direction: column;

  list-style: none;

  padding: 0 5px;

  &__item {
    color: #f5f6f8;
    font-size: 18px;

    align-items: center;

    padding: 1rem 10px;

    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #3f4452b3;
      cursor: pointer;
    }
  }
}
</style>

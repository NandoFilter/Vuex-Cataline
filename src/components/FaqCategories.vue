<template>
  <div>
    <div class="head">
      <div class="head_img">
        <img src="@/assets/images/astronaut.svg" />
      </div>
      <div class="head_text">
        <h2>Perguntas Frequentes</h2>
        <p>Escolha a categoria desejada</p>
      </div>
    </div>
    <ul class="categories">
      <li
        v-for="category in $allCategories"
        :key="category"
        class="categories_item"
      >
        <img :src="getIcon(category)" />
        <p>{{ category.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchFaqCategories')
  },
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories
    }
  },
  methods: {
    getIcon(item) {
      return require(`@/assets/images/${item.icon}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  color: #f5f6f8;

  &_img {
    display: grid;
    justify-content: center;

    img {
      width: 242px;
    }
  }

  &_text {
    margin-left: 25px;

    h2 {
      font-size: 24px;
      margin: 20px 0 0 0;
    }

    p {
      margin: 5px 0 0 0;
      font-size: 16px;
    }
  }
}

.categories {
  list-style: none;

  padding: 10px 0 0 0;

  &_item {
    color: #f5f6f8;

    padding: 0.25rem 1.875rem;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2.125rem;

    align-items: center;

    transition: background-color 200ms ease-in-out;

    img {
      width: 1.5rem;
    }

    &:hover {
      background-color: #3f4452;
      cursor: pointer;
    }
  }
}
</style>

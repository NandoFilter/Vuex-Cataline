import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqCategories: []
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload
    }
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const data = faqCategories
      commit('SET_FAQ_CATEGORIES', data)
    }
  },
  getters: {
    $allCategories(state) {
      return state.faqCategories
    }
  }
})

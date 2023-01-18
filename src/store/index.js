import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    actualPage: 'FaqCategories',
    faqCategories: [],
    singleCategory: [],
    singleQuestion: [],
    transition: ''
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload
    },
    SET_PAGE(state, payload) {
      state.actualPage = payload
    },
    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCategory = payload
    },
    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload
    },
    SET_TRANSITION(state, payload) {
      state.transition = payload
    }
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const data = faqCategories
      commit('SET_FAQ_CATEGORIES', data)
    },
    setPage({ commit }, payload) {
      commit('SET_PAGE', payload)
    },
    setCategory({ commit }, payload) {
      commit('SET_SINGLE_CATEGORY', payload)
    },
    setQuestion({ commit }, payload) {
      commit('SET_SINGLE_QUESTION', payload)
    },
    setTransition({ commit }, payload) {
      commit('SET_TRANSITION', payload)
    }
  },
  getters: {
    $allCategories(state) {
      return state.faqCategories
    },
    $actualPage(state) {
      return state.actualPage
    },
    $singleCategory(state) {
      return state.singleCategory
    },
    $singleQuestion(state) {
      return state.singleQuestion
    },
    $transition(state) {
      return state.transition
    }
  }
})

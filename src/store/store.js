import Vue from 'vue';
import Vuex from 'vuex';
import articles from './module/articles';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeName: 'main'
  },
  getters: {
    //
  },
  mutations: {
    setActiveName(state,name) {
      state.activeName = name;
    }
  },
  actions: {
    //
  },
  modules: {
    articles
  }
});

export default store;
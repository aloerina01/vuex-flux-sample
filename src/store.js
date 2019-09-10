import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";

Vue.use(Vuex);

const instance = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: actions
});

export default instance;

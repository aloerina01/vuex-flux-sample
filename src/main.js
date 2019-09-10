import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { createDispatcher } from "./Dispatcher";

Vue.config.productionTip = false;
createDispatcher(store);

new Vue({
  render: h => h(App),
  store
}).$mount("#app");

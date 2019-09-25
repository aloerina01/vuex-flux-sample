<template>
  <div class="hello">
    <div>reactive count: {{ $store.getters._count }}</div>
    <div>functional count: {{ functionalCount }}</div>
    <button @click="onClick">increment</button>
  </div>
</template>

<script>
import ActionTypes from "../actionTypes";
import { getDispatcher } from "../Dispatcher";

export default {
  name: "HelloWorld",
  methods: {
    onClick() {
      const dispatcher = getDispatcher();
      dispatcher.dispatch(ActionTypes.Increment);
    }
  },
  computed: {
    functionalCount() {
      // getterでプロパティアクセスとメソッドアクセスを比較する用
      return this.$store.getters.getCount();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <h1>{{ title }}</h1>
  <Button @click="increments" outlined>Click me</Button>
  <!-- <div id="app"></div> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Button,
  },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increments() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

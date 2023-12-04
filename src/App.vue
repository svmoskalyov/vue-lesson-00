<template>
  <div id="app">
    <Notif />
    <div class="content">
      <AppHeader />
      <!-- <router-link to="/">Home</router-link>{{ " " }} -->
      <!-- <router-link to="/about">About</router-link>{{ " " }} -->
      <router-view></router-view>
    </div>

    <!-- {{ $store.state.userName }} -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/header";
import Notif from "./components/notifications";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
    Notif,
  },
  // mounted() {
  //   // console.log(this.$store.state.userName);

  //   setTimeout(() => {
  //     this.$store.commit("changeName", "Ted");
  //   }, 1000);
  // },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
  /* padding-top: 120px; */
}
</style>

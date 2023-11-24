<template>
  <nav class="nav-link">
    <router-link :to="{ name: 'home' }"> Home</router-link>
    <router-link :to="{ name: 'about' }"> About</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav-link {
  display: inline-flex;
  gap: 12px;
}
</style>

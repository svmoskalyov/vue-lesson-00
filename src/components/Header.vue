<template>
  <header class="header">
    <Container class="header__box">
      <Logo />
      <NavBar />
    </Container>
  </header>
</template>

<script>
import Container from "./shared/Container.vue";
import Logo from "./Logo.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "Header",
  components: {
    Container,
    Logo,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
  z-index: 100;

  &__box {
    display: flex;
    gap: 40px;
  }
}
</style>

<template>
  <header class="header">
    <Container class="header__content">
      <Logo />
      <NavBar />
      <AccountActions v-if="isLoggedIn" />
      <AuthActions v-else />
    </Container>
  </header>
</template>

<script>
import Container from "../shared/Container.vue";
import Logo from "../Logo.vue";
import NavBar from "../NavBar.vue";
import AuthActions from "./AuthActions.vue";
import AccountActions from "./AccountActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Container,
    Logo,
    NavBar,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
  }
}
</style>

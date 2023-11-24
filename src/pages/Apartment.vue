<template>
  <div>
    <Container>
      <h1>Apartment Page</h1>
    </Container>
  </div>
</template>

<script>
import Container from "../components/shared/Container.vue";

export default {
  name: "Apartment",
  components: {
    Container,
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.name);
  },
};
</script>

<style lang="scss" scoped></style>

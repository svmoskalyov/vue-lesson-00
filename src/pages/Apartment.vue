<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__addition-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import apartments from "../components/apartment/apartments.json";
import ApartmentsMainInfo from "@/components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import Reviews from "../components/reviews";
import reviewsList from "../components/reviews/reviews.json";

export default {
  name: "Apartment",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  // mounted() {
  //   console.log(this.$route.params.id);
  //   console.log(this.$route.query.name);
  // },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  &__owner {
    min-width: 300px;
  }
}
</style>

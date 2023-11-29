<template>
  <main class="homepage">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
        <p v-if="!filteredApartments.length">Not found</p>

        <ApartmentsList v-else :items="filteredApartments">
          <!-- <template v-slot:title>New title</template> -->
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
// import apartments from "../components/apartment/apartments.json";
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import Container from "../components/shared/Container.vue";
import { getApartmentsList } from "@/services/apartments.service";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer.vue";

export default {
  name: "Home",
  components: {
    Container,
    ApartmentsFilterForm,
    ApartmentsList,
    ApartmentsItem,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter({ city, price }) {
      console.log("🚀 ~ filter ~ price:", price);
      console.log("🚀 ~ filter ~ city:", city);
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>

<template>
  <div :id="$style.app">
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="filter" />
    </Container>
    <p v-if="!filteredApartments.length">Not found</p>

    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:title>New title</template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import apartments from "./components/apartment/apartments.json";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import Container from "./components/shared/Container.vue";

export default {
  name: "App",
  components: {
    Container,
    ApartmentFilterForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      console.log(
        "filteredApartments -->",
        "City: ",
        this.filters.city,
        "Price: ",
        this.filters.price
      );
      // return this.filterByCityName(this.filterByPrice(this.apartments));

      const one = this.filterByPrice(this.apartments);
      console.log("🚀 ~ filteredApartments ~ one:", one);

      const two = this.filterByCityName(one);
      console.log("🚀 ~ filteredApartments ~ two:", two);

      return two;
    },
  },
  methods: {
    filter({ city, price }) {
      console.log("filter -->", city, price);
      this.filters.city = city;
      this.filters.price = price;
      console.log("filter this -->", this.filters.city, this.filters.price);
    },
    filterByCityName(apartments) {
      console.log("filterByCityName -->", this.filters.city);
      // console.log(apartments);
      // console.log(this.filters.city);
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        console.log("filterByCityName filter -->", apartment.location.city);
        // console.log(this.filters.city);
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      console.log("filterByPrice -->", this.filters.price);
      // console.log(this.filters.price);
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        console.log("filterByPrice filter -->", apartment.price);
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

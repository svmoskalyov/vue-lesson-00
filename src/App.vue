<template>
  <div :id="$style.app">
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger" />
    </Container>

    <ApartmentsList :items="apartments">
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
    };
  },
  methods: {
    logger(value) {
      console.log("form value", value);
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

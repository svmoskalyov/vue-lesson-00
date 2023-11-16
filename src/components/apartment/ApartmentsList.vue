<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </Container>
</template>

<script>
import Container from "../shared/Container.vue";
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: {
    Container,
    ApartmentsItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

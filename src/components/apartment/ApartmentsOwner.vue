<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Info from owner</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">phone: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: "ApartmentsOwner",
  props: {
    owner: {
      type: Object,
      requiered: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-owner {
  margin-bottom: 20px;
  padding: 20px;
  background: #e1efff;
  font-weight: 400;

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
}
</style>

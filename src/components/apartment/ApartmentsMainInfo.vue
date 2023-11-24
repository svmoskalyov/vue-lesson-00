<template>
  <article class="apartmant-main-info">
    <div class="apartmant-main-info__heading">
      <h1 class="apartmant-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartmant-main-info__photo" />
    <p class="apartmant-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentsMainInfo",
  components: {
    StarRating,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartmant-main-info {
  &__heading {
    display: flex;
    gap: 20px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  &__photo {
    margin-bottom: 20px;
    max-width: 400px;
  }

  &__description {
    line-height: 1.3;
  }
}
</style>

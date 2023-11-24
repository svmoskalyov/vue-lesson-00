<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from "./ReviewsHeading.vue";

export default {
  name: "ReviewsItem",
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  padding: 20px;
  background: #fff;
  border: 2px solid #e1efff;
  border-top: 1px;

  &__content {
    padding-top: 20px;
    line-height: 1.3;
  }
}
</style>

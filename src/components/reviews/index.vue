<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Sum Reviews</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviws }} reviews</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from "./reviews-item";
import StarRating from "../StarRating.vue";

export default {
  name: "Reviews",
  components: {
    ReviewsItem,
    StarRating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviws() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? " Show Less"
        : "Show More";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }

      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  &__show-more {
    padding: 12px;
    width: 100%;
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--outlined"
    ></span>

    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star--colored"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWwidth() {
      return (this.rating / this.starLimit) * 100;
    },
    ratingWidthStyle() {
      return `width: ${this.ratingWwidth}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  display: inline-flex;
  position: relative;

  &__colored {
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    overflow: hidden;
  }
}
.star {
  display: flex;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;

  &--colored {
    background: url("../../public/img/star-active.svg");
  }

  &--outlined {
    background: url("../../public/img/star-noactive.svg");
  }
}
</style>

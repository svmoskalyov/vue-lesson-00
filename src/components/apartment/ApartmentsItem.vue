<template>
  <div class="apartments-item" @click="log(2, $event)">
    <div class="apartments-item__inner"></div>
    <img :src="imgSrc" alt="" class="apartments-item__photo" />
    <div class="apartments-item__content">
      <p class="apartments-item__description">
        {{ descr }}
      </p>
      <div class="apartments-item__rating">
        <StarRating :rating="rating" />
      </div>
      <div class="apartments-item__price">UAH {{ price }}</div>
      <!-- <a href="http://google.com" @click.prevent.stop="handleLinkClick"
        >google</a
      > -->

      <router-link
        :to="{ name: 'apartment', params: { id }, query: { name: 'John' } }"
        class="apartments-item__link"
      ></router-link>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentsItem",
  components: {
    StarRating,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
  methods: {
    log(index, event) {
      console.log(index);
      console.log(event);
    },
    handleLinkClick() {
      console.log("click on link google");
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  max-width: 350px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 500;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

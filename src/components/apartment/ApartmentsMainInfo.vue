<template>
  <article class="apartmant-main-info">
    <div class="apartmant-main-info__heading">
      <h1 class="apartmant-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartmant-main-info__photo" />
    <p class="apartmant-main-info__description">{{ apartment.descr }}</p>
    <div class="apartmant-main-info__btn">
      <Button @click="hanleApartmentsBooking" :loading="isLoading">
        Reserve
      </Button>
    </div>
  </article>
</template>

<script>
import StarRating from "../StarRating.vue";
import Button from "../shared/Button.vue";
import { bookApartment } from "../../services/order.service";

export default {
  name: "ApartmentsMainInfo",
  components: {
    StarRating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async hanleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.isLoading = true;
        await bookApartment(body);
        this.$notify({
          type: "success",
          title: "Order added",
        });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error order",
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
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

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>

<template>
  <div class="reviews-avatar">
    <img src="@/assets/logo.png" alt="logo img" class="reviews-avatar__img" />
  </div>
</template>

<script>
export default {
  name: "ReviewsAvatar",
};
</script>

<style lang="scss" scoped>
.reviews-avatar {
  display: flex;
  align-items: center;

  &__img {
    width: 40px;
    height: 40px;
  }
}
</style>

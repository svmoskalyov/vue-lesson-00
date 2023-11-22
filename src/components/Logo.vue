<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="logo img" class="logo__img" />
    <span class="logo__text">Logo</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  text-align: center;
  gap: 4px;
}
.logo__img {
  width: 18px;
  height: 18px;
}

.logo__text {
  color: #fff;
}
</style>

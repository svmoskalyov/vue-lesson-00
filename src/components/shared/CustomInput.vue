<template>
  <input v-on="listeners" class="custom-input" />
</template>

<script>
export default {
  name: "CustomInput",
  computed: {
    listeners() {
      return {
        // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  min-width: 220px;

  &::placeholder {
    color: inherit;
  }
}
</style>

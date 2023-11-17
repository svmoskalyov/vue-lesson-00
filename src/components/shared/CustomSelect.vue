<template>
  <select v-on="listeners" class="custom-select">
    <option
      v-for="item in formatedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    listeners() {
      return {
        // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-select {
  display: inline-block;
  height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  min-width: 220px;
}
</style>

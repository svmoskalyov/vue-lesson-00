<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="custom-input"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
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

<template>
  <div class="wrapper-input">
    <input
      v-on="listeners"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />

    <!-- <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="custom-input"
      v-bind:placeholder="placeholder"
    /> -->
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    // modelValue: {
    //   type: String,
    //   required: true,
    // },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    // placeholder: {
    //   type: String,
    //   default: "",
    // },
  },
  // emits: ["update:modelValue"],
  computed: {
    listeners() {
      return {
        input: (event) => this.$emit("update:modelValue", event.target.value),
      };
    },
  },
  watch: {
    value() {
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },
  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },
    reset() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  min-height: 40px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  width: 100%;
  /* min-width: 220px; */

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    color: red;
    font-size: 12px;
    line-height: 1.3;
  }
}
</style>

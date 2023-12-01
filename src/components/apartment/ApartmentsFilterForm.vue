<template>
  <h3>p: {{ city }}</h3>
  <h3>c: {{ price }}</h3>

  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect v-model="city" :items="cities" />
    <CustomInput
      v-model="price"
      placeholder="Price from"
      error-message="not empty"
      :rules="rules"
    />
    <SubmitButton class="form__submit" type="submit"> Submit </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/Button.vue";
import { isRequired, charLimit } from "@/utils/validationRules";

export default {
  name: "ApartmentsFilterForm",
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Lviv",
        "Dnipro",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 12px;
}

.form__submit:hover {
  background-color: orangered;
}
</style>

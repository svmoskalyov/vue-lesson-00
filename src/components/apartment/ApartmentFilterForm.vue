<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect v-model="city" :items="cities" />
    <CustomInput v-model="price" placeholder="Price from" />
    <SubmitButton class="form__submit" type="submit"> Submit </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/Button.vue";

export default {
  name: "ApartmentFilterForm",
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
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 12px;
}
</style>

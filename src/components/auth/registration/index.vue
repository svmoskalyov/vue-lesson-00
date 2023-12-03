<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Login</MainTitle>
    <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="confirmPassword"
        placeholder="Confirm password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <Button type="submit" class="registration__btn" :loading="loading"
        >Registration</Button
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form";
import CustomInput from "../../shared/CustomInput.vue";
import Button from "../../shared/Button.vue";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "../../shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
// import { registerUser } from "@/services/auth.service";

export default {
  name: "Registration",
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  date() {
    return {
      loading: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      // formData: {
      //   email: "",
      //   password: "",
      // },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.password,
          message: "password not correct",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this;

      if (isFormValid) {
        try {
          this.loading = true;
          // const { data } = await registerUser(
          //   this.name,
          //   this.email,
          //   this.password
          // );
          // console.log(data);

          // const { user, token } = data;
          // this.$store.commit("setUserData", user);
          // this.$store.commit("setToken", token);
          // console.log(this.$store.state);

          await this.$store.dispatch("registration", { name, password, email });

          this.$router.push({ name: "home" });

          form.reset();
          // console.log(this.email, this.password);
          // console.log(this.formData);
        } catch (error) {
          // console.error(error);
          this.$notify({
            type: "error",
            title: "Error",
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__title {
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>

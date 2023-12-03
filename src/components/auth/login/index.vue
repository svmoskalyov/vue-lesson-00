<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button type="submit" class="login__btn" :loading="loading"
        >Login In</Button
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
// import { loginUser } from "@/services/auth.service";

export default {
  name: "Login",
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
      email: "",
      password: "",
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
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { password, email } = this;

      if (isFormValid) {
        try {
          this.loading = true;
          // const { data } = await loginUser(this.email, this.password);
          // console.log(data);

          // const { user, token } = data;
          // this.$store.commit("setUserData", user);
          // this.$store.commit("setToken", token);

          await this.$store.dispatch("login", { password, email });

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
.login {
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

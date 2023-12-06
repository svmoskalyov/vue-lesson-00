import Home from "./pages/Home.vue";
import Apartment from "./pages/Apartment.vue";
import About from "./pages/About.vue";
import LoginPage from "./pages/Login.vue";
import RegistrationPage from "./pages/Registration.vue";
import MyOrdersPage from "./pages/MyOrders.vue";
import NotFound from "./components/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/:pathMatch(.*)", component: NotFound, name: "not-found" },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "home" });
    }
  }

  next();
});

export default router;

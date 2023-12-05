import Home from "./pages/Home.vue";
import Apartment from "./pages/Apartment.vue";
import About from "./pages/About.vue";
import LoginPage from "./pages/Login.vue";
import RegistrationPage from "./pages/Registration.vue";
import MyOrdersPage from "./pages/MyOrders.vue";

import NotFound from "./components/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/registration", component: RegistrationPage, name: "registration" },
  { path: "/my-orders", component: MyOrdersPage, name: "my-orders" },
  { path: "/apartments/:id", component: Apartment, name: "apartment" },
  { path: "/:pathMatch(.*)", component: NotFound, name: "not-found" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

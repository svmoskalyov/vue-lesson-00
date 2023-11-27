import Home from "./pages/Home.vue";
import Apartment from "./pages/Apartment.vue";
import About from "./pages/About.vue";
import LoginPage from "./pages/Login.vue";
import NotFound from "./components/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/apartments/:id", component: Apartment, name: "apartment" },
  { path: "/:pathMatch(.*)", component: NotFound, name: "not-found" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import Home from "./pages/Home.vue";
import Apartment from "./pages/Apartment.vue";
import About from "./pages/About.vue";
import NotFound from "./components/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/apartment", component: Apartment, name: "apartment" },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

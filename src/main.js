import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.use(Notifications);
app.mount("#app");

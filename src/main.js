import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes.js";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

//  app.use(router)
createApp(App).use(router).mount("#app");

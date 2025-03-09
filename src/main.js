import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes.js";
import { createPinia } from "pinia";

import { createRouter, createWebHistory } 
from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
 const store = createPinia();
const app = createApp(Ap
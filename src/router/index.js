import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("../views/Sign.vue"),
    },    
    {
      path: "/contract",
      name: "contract",
      component: () => import("../views/Contract.vue"),
    },
    {
      path: "/save",
      name: "save",
      component: () => import("../views/Save.vue"),
    },
  ],
});

export default router;

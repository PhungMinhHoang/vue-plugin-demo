import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

let routes = [];

const modules = import.meta.glob("../plugins/**/router.ts");
for (const path in modules) {
  const routeImport: any = await modules[path]();
  routes.push(...routeImport.default);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        isVisible: true,
        label: "Trang chủ",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        isVisible: true,
        label: "Về chúng tôi",
      },
    },
    ...routes,
  ],
});

export default router;

import { createApp } from "vue";
import { createPinia } from "pinia";
import corePlugin from "./plugins/corePlugin";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const store = createPinia();

app.use(store);
app.use(router);

//This callback will be call after all plugins are installed
const installPluginCallback = () => {
  // Change the current location and overwrite dynamic route when page is reloaded
  // https://router.vuejs.org/guide/advanced/dynamic-routing.html#adding-routes
  router.replace(router.currentRoute.value.fullPath);

  app.mount("#app");
};
app.use(corePlugin, { router, store, callback: installPluginCallback });

//Inject window
window.Vue = app;
window.router = router;
window.store = store;
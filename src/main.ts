import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
// @ts-ignore
import { commonLocalesMessage } from "./i18n";
import corePlugin from "./plugins/corePlugin";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const store = createPinia();
const i18n = createI18n({
  locale: "vi",
  messages: commonLocalesMessage(),
});

app.use(router);
app.use(store);
app.use(i18n);

//Inject window
Object.assign(app, { router, store, i18n });
window.Vue = app;

//This callback will be call after all plugins are installed
const installPluginCallback = () => {
  // Change the current location and overwrite dynamic route when page is reloaded
  // https://router.vuejs.org/guide/advanced/dynamic-routing.html#adding-routes
  router.replace(router.currentRoute.value.fullPath);

  app.mount("#app");
};
app.use(corePlugin, { router, store, i18n, callback: installPluginCallback });

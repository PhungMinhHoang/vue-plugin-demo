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

app.use(corePlugin, { router, store, i18n, callback: installPluginCallback });

function installPluginCallback() {
  app.mount("#app");
}

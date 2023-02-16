import type { App } from "vue";
import { useTestPlugin } from "./composables";
import routes from "./router.js";
import viLocaleMessage from "./i18n/vi.js";
import enLocaleMessage from "./i18n/en.js";

const testPlugin = {
  name: "testPlugin",
  install(app: App, options) {
    if (options.addRouter) {
      extendRouter(app.router);
    }
    extendStore(app.store);

    app.i18n.global.mergeLocaleMessage("vi", {
      testPlugin: viLocaleMessage
    });

    app.i18n.global.mergeLocaleMessage("en", {
      testPlugin: enLocaleMessage
    });

    app.config.globalProperties.$useTestPlugin = useTestPlugin;
  },
};

const extendRouter = (router) => {
  routes.forEach((route) => {
    router.addRoute(route);
  });
};

const extendStore = (store) => {
  const SecretPiniaPlugin = () => {
    return {
      secretData: "secret",
    };
  };

  store.use(SecretPiniaPlugin);
};

export default testPlugin;

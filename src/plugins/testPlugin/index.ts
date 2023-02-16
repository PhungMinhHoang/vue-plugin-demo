import type { App } from "vue";
import { useTestPlugin } from "./composables";
import routes from "./router.js";

const testPlugin = {
  install(app: App, options) {
    if (options.addRouter) {
      extendRouter(app.router);
    }
    extendStore(app.store);

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

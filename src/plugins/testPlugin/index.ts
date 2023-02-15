//import routes from "./router.js";

import type { App } from "vue";
import { useTestPlugin } from "./composables";

const testPlugin = {
  install(app: App, options) {
    //extendRouter(app.router);
    extendStore(app.store);

    app.config.globalProperties.$useTestPlugin = useTestPlugin;
  },
};

// const extendRouter = (router) => {
//   routes.forEach((route) => {
//     console.log("Add route", route);
//     router.addRoute(route);
//   });
// };

const extendStore = (store) => {
  const SecretPiniaPlugin = () => {
    return {
      menu: [{ label: "Test Plugin" }],
      count: 5,
    };
  };

  store.use(SecretPiniaPlugin);
};

export default testPlugin;

import routes from "./router.js";

const testPlugin = {
  install(Vue, options) {
    extendRouter(options.router);
    extendStore(options.store);
  },
};

const extendRouter = (router) => {
  routes.forEach((route) => {
    console.log("Add route", route);
    router.addRoute(route);
  });
};

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

import routes from "./router.js";

const testPlugin = {
  install(app, options) {
    extendRouter(app.router);
    extendStore(app.store);
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

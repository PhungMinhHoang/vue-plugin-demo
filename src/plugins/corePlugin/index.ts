import config from "@/pluginConfig.js";

export default {
  async install(Vue, options) {
    const pluginList = config.plugins;

    for (const pluginName of pluginList) {
      try {
        const importPlugin = await import(`../${pluginName}`);
        const pluginModule = importPlugin.default;

        Vue.use(pluginModule, options);
        console.log(`${pluginName} plugin is installed`);
      } catch (error) {
        console.log(`${pluginName} plugin not found: ` + error);
      }
    }

    if (options.callback && typeof options.callback === "function") {
      options.callback();
    }
  },
};

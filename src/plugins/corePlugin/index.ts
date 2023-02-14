export default {
  async install(Vue, options) {
    const modules = import.meta.glob(["../../**/plugin.json", "!./plugin.json"]);

    for (const path in modules) {
      const pluginInfo: any = await modules[path]();
      console.log(path, pluginInfo);

      try {
        const importPlugin = await import(`../${pluginInfo.id}`);
        const pluginModule = importPlugin.default;

        Vue.use(pluginModule, options);
        console.log(`${pluginInfo.id} plugin is installed`);
      } catch (error) {
        console.log(`${pluginInfo.id} plugin not found: ` + error);
      }
    }

    if (options.callback && typeof options.callback === "function") {
      options.callback();
    }
  },
};

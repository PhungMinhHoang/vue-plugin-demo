export default {
  async install(app, options) {
    const modules = import.meta.glob(["../../**/plugin.json", "!./plugin.json"]);

    for (const path in modules) {
      const pluginInfo: any = await modules[path]();

      try {
        const importPlugin = await import(`../${pluginInfo.id}/index.ts`);
        const pluginModule = importPlugin.default;

        app.use(pluginModule, options);
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

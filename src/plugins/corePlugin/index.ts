import pluginConfig from "@/pluginConfig";

export default {
  async install(app, options) {
    //await autoInstallPlugin(app);
    installPluginByConfig(app);

    if (options?.callback && typeof options?.callback === "function") {
      options.callback();
    }
  },
};

async function autoInstallPlugin(app) {
  const modules = import.meta.glob(["../../**/plugin.json", "!./plugin.json"]);

  for (const path in modules) {
    const pluginInfo: any = await modules[path]();

    try {
      const importPlugin = await import(`../${pluginInfo.id}/index.ts`);
      const pluginModule = importPlugin.default;

      app.use(pluginModule, pluginInfo.options);
      console.log(`${pluginInfo.id} plugin is installed`);
    } catch (error) {
      console.log(`${pluginInfo.id} plugin not found: ` + error);
    }
  }
}

function installPluginByConfig(app) {
  for (const key in pluginConfig.plugins) {
    const plugin = pluginConfig.plugins[key];
    app.use(plugin.module, plugin.options);
  }
}

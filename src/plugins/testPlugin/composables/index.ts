import TestPluginAPI from "../api";

export function useTestPlugin() {
  const api = new TestPluginAPI("https://kiosk-stage.winlife.vn");

  const testApi = async () => {
    const response = await api.testApi();
    return response;
  };

  return {
    testApi,
  };
}

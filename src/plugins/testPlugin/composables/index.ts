import TestPluginAPI from "../api";
import { useTestPluginStore } from "../store";

export interface UseTestPluginType {
  testApi: () => Promise<any>;
  store: any;
}

export function useTestPlugin(): UseTestPluginType {
  const api = new TestPluginAPI("https://kiosk-stage.winlife.vn");

  const testApi = async () => {
    const response = await api.testApi();
    return response;
  };

  const store = useTestPluginStore();

  return {
    testApi,
    store,
  };
}

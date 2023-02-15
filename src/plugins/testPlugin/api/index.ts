import BaseAPI from "@/api/BaseAPI";

export default class TestPluginAPI extends BaseAPI {
  public async testApi() {
    return this._get("/order-service/rules-kiosks/kiosk/Z2avJtQwAY");
  }
}

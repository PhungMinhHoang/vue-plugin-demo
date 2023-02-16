import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTestPluginStore = defineStore("testPlugin", {
  state: () => ({
    test: 0,
    settings: {},
  }),
  actions: {
    fetchSettings() {},
  },
});

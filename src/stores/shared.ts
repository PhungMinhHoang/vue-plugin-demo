import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSharedStore = defineStore("shared", {
  state: () => ({
    username: "hoangpm",
  }),
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
  },
});

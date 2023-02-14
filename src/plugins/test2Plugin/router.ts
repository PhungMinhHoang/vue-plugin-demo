import TestPluginWelcome from "./components/TestPluginWelcome.vue";

export default [
  {
    path: "/test-2",
    name: "Test2PluginWelcome",
    component: TestPluginWelcome,
    meta: {
      isVisible: true,
      label: "Test 2 Plugin",
    },
  },
];

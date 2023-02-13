import TestPluginWelcome from "./components/TestPluginWelcome.vue";

export default [
  {
    path: "/test",
    name: "TestPluginWelcome",
    component: TestPluginWelcome,
    meta: {
      isVisible: true,
      label: "Test Plugin",
    },
  },
];

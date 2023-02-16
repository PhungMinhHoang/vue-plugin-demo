import testPlugin from "./plugins/testPlugin";

export default {
  plugins: {
    testPlugin: {
      module: testPlugin,
      options: {
        addRouter: true,
      },
    },
  },
};

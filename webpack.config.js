// 1. import default from the plugin module
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

// 3. add getCustomTransformer method to the loader config
const config = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          // other loader's options
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
  },
};

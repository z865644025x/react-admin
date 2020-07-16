const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const darkThemeVars = require("antd/dist/dark-theme");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    cssLoaderOptions: {},
    cssModules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
    modifyVars: {
      hack: `true;@import "${require.resolve(
        "antd/lib/style/color/colorPalette.less"
      )}";`,
      ...darkThemeVars,
      "@primary-color": "#02b875"
    }
  }),
);
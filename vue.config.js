const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': './src',
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/variables/_variables.scss";',
      },
    },
  },
});

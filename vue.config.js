const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/helpers/_variables.scss";
          @import "./src/assets/scss/helpers/_mixins.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].publicPath = './';
      return args;
    });
  },
});

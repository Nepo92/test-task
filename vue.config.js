const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
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
});

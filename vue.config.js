// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    open: true,
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/': {
        changeOrigin: true,
        ws: false,
        target: 'http://localhost:3000/'
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "@/styles/index.less";`,
          },
        },
      },
    },
  },
};
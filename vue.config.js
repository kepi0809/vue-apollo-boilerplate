const path = require('path')
module.exports = {
  pluginOptions: {
    apollo: { enableMocks: false, enableEngine: true },
  },
  transpileDependencies: ['apollo-link-http', 'vue-apollo'],
  lintOnSave: false,
  configureWebpack: {
    name: 'Vue Apollo Boilerplate',
    performance: {
      hints: process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning',
    },
    resolve: {
      extensions: { delete: '.vue' },
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@layouts': path.resolve(__dirname, 'src/layouts/'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@views': path.resolve(__dirname, 'src/views/'),
      },
    },
  },
  css: { sourceMap: false },
}

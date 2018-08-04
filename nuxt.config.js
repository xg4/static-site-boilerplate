const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: '易店无忧',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: ['vant/lib/vant-css/index.css', '@/assets/css/index.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vant-ui', '@/plugins/axios'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true, // Can be also an object with default options
    baseURL: 'http://127.0.0.1:3000/api',
    browserBaseURL: 'http://127.0.0.1:3000/api'
  },

  proxy: {
    '/api': {
      target: 'http://maihui.yuzhua.info',
      pathRewrite: { '^/api': '/' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: [
      require('autoprefixer'),
      require('postcss-pxtorem')({
        rootValue: 16.5,
        unitPrecision: 5,
        propList: ['*', '!font-size'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 12
      })
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

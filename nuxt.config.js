const e = require('./env.js')
const env = Object.assign({}, e.default, e[process.env.NODE_ENV])

const config = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TenderBender-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' }
    ]
  },

  server: {
    port: env.port
  },

  env: env,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ '~/plugins/vuesax'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export default config
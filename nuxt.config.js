import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto|Alegreya+SC|Cinzel+Decorative&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2a0824' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  manifest: {
    name: 'Orion Gallery',
    short_name: 'Orion',
    background_color: '#2a0824',
    theme_color: '#2a0824'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  env: {
    apiKey: 'AIzaSyDtoLjJRD2wu94gpK_KQB31v6OIdGkSYMg',
    authDomain: 'orion-gallery-116f8.firebaseapp.com',
    databaseURL: 'https://orion-gallery-116f8.firebaseio.com',
    projectId: 'orion-gallery-116f8',
    storageBucket: 'orion-gallery-116f8.appspot.com',
    messagingSenderId: '872124384806',
    appId: '1:872124384806:web:ba65b1a95eda03b4bcc8e7',
    measurementId: 'G-YGDEH1GBTQ'
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

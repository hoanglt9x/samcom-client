// import path from 'path'
// import fs from 'fs'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  env: {
    strapiBaseUri: process.env.API_URL || 'http://192.168.1.28:1337'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'service',
        name: 'service',
        content:
          'Đo đạc - Bay chụp ảnh hàng không - Cơ sở dữ liệu GIS- Lập trình phần mềm GIS'
      },
      {
        hid: 'geo.region',
        name: 'geo.region',
        content: 'VN-HN'
      },
      {
        hid: 'geo.position',
        name: 'geo.position',
        content: '21.050, 105.785'
      },
      {
        hid: 'ICBM',
        name: 'ICBM',
        content: '21.050, 105.785'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#db5945'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
    ],
    script: [
      // { src: 'https://unpkg.com/swiper/js/swiper.min.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css', '~/assets/main.css', 'swiper/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/i18n.js',
    {
      src: '~/plugins/vue-scrollmagic.js',
      mode: 'client'
    },
    { src: '~/plugins/owl.js', mode: 'client' },
    { src: '@/plugins/vue-swiper.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-16556656-7'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-material-design-icons',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'vue-scrollto/nuxt',
    '@nuxtjs/markdownit',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  apollo: {
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network'
      }
    },
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://192.168.1.28:1337/graphql'
      }
    }
  },
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}

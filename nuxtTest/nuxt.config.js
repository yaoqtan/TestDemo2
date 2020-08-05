require('dotenv').config({ path: '.env' })

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    port: process.env.NODE_ENV === 'development' ? 3000 : 3000,
    host: '127.0.0.1'
  },
  head: {
    title: '映画チケット予約なら映画ランド' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:url', name: 'og:url', content: 'https://eigaland.com/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: process.env.npm_package_name || '' },
      { hid: 'og:description', name: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', name: 'og:image', content: 'https://eigaland.com/assets/eigaland/images/logos/eigaland_icon_256x256.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@eigaland' },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.npm_package_name || '' },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://eigaland.com/assets/eigaland/images/logos/eigaland_icon_256x256.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false, // { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 'swiper/dist/css/swiper.css',
    '~/assets/css/swiper.css',
    '~/assets/css/reset.css',
    '~/assets/css/page-transition.css',
    '~/assets/scss/global.scss'

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/request.js', ssr: true },
    { src: '~/plugins/api.js', ssr: true },
    { src: '~/plugins/i18n.js', ssr: true },
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: true },
    { src: '~/plugins/vue-global.js', ssr: false }
  ],
  pwa: {
    manifest: {
      name: '映画',
      lang: 'ja'
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', {
      filename: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
    }],
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/proxy'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variable.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/jpm/': {
      target: process.env.NODE_ENV === 'development' ? 'https://lab.eigaland.com/' : 'https://api.eigaland.com/'
    }

  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

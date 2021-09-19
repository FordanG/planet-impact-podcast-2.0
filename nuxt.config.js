export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Planet Impact Podcast',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/exy3hvb.css' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/ff17b19e18.js',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/icons']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/setup/
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],
  content: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Aleo: true,
      Montserrat: true
    }
  }
}

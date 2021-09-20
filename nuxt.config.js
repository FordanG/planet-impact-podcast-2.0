export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

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
      {
        hid: 'description',
        name: 'description',
        content:
          'Planet Impact Podcast is a weekly show on how non-conformist social entrepreneurs are changing the world.'
      },
      { name: 'format-detection', content: 'telephone=no' },

      // <!-- Open Graph / Facebook -->
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Planet Impact Podcast' },
      {
        property: 'og:description',
        content:
          'Planet Impact Podcast is a weekly show on how non-conformist social entrepreneurs are changing the world.'
      },
      { property: 'og:image', content: '~assets/img/embed-image.png' },

      // <!-- Open Graph / Twitter -->
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Planet Impact Podcast' },
      {
        property: 'twitter:description',
        content:
          'Planet Impact Podcast is a weekly show on how non-conformist social entrepreneurs are changing the world.'
      },
      { property: 'twitter:image', content: '~assets/img/embed-image.png' },

      // Google Site Verification
      {
        name: 'google-site-verification',
        content: 'UduesaFmIDqV4Dd7WxkMGZEoHkNiCNcAG5v4y_ozXFQ'
      }
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
  plugins: ['~plugins/aos.js'],

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
  modules: [
    '@nuxt/content',
    // https://github.com/nuxt-community/google-gtag-module
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-179040161-1',
    config: {
      anonymize_ip: false, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['planetimpactpod.com', 'domain.org']
      }
    },
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },
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

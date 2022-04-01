export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'i am brent',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui' },
      { hid: 'og:title', name: 'og:title', content: 'iambrent' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'iambrent' },
      { hid: 'description', name: 'description', content: 'web developer building cool shit' },
      { hid: 'og:description', name: 'og:description', content: 'web developer building cool shit' },
      { hid: 'theme-color', name: 'theme-color', content: '#0e0e0e' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'iambrent' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicons/android-chrome-256x256.png' },
      { rel: 'icon', type: 'image/png', sizes: '150x150', href: '/favicons/mstile-150x150.png' },
      { rel: 'mask-icon', color: '#ffffff', href: '/favicons/safari-pinned-tab.svg' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/typography.css',
    '@/assets/css/scaffolding.css',
    '@/assets/css/inputs.css',
    '@/assets/css/links.css',
    '@/assets/css/buttons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      }
    },
  }
}

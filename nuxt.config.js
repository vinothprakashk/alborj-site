export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Alborj Group UAE | Manpower Service Providers in UAE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'theme_color', content: '#fff' },
      {
        hid: 'description',
        name: 'description',
        content: 'Alborj Group UAE | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      },
      {
        hid: 'og:title',
        name: 'description',
        content: 'Alborj Group UAE | Manpower Service Providers in UAE'
      },

      {
        hid: 'og:description',
        name: 'description',
        content: 'Alborj Group UAE | specialize in car battery replacement, flat tire servicing, fuel delivery, towing service and jump start services in UAE'
      },
      { hid: 'og:image', property: 'og:image', content: '/og-image.png' },

      { name: 'google-site-verification', content: '-n8Sms-rpS7E6sNkZKWjowhe2fez6LYcuZDmNzNntnU' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' }
    ],

    script: [
      { hid: 'wow', src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', defer: true },
      { hid: 'owlcarousel', src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', defer: true },
      { hid: 'jquery', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js' }
    ]
  },

  target: 'static', // default is 'server'

  styleResources: {
    scss: [
      '~/assets/styles/lib.scss'
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/styles.scss'
  ],

  loading: '~/components/LoadingBar.vue',

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '~plugins/ga.js', mode: 'client'
  }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}

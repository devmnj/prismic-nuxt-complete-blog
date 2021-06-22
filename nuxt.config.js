require('dotenv').config()
export default {

    googleAnalytics: {
      id: process.env.GID,

  },
 
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GID
    }
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    middleware: 'config'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prismic-p1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],
  tailwindcss: {
    // Options
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faInfoCircle"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faTwitter",
              "faInstagram",
              "faSlack",
              "faYoutube",
              "faGithub",
            ],
          },
        ],
      },
    ],
  ],
  prismic: {
    endpoint: process.env.prismicEP,
    modern: false
    /* see configuration for more */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-MSFCXHC',
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },
  // 'google-gtag': {
  //   id: 'UA-56767-97',
  //   config: {
  //     anonymize_ip: true, // anonymize IP
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //     linker: {
  //       domains: ['domain.com','domain.org']
  //     }
  //   },
  //   debug: true, // enable to track in dev mode
  //   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  //   additionalAccounts: [{
  //     id: 'AW-XXXX-XX', // required if you are adding additional accounts
  //     config: {
  //       send_page_view: false // optional configurations
  //     }
  //   }]
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-slicezone']
  },
  storybook: {
    //  addons: [
    //   '@storybook/addon-controls',
    //   '@storybook/addon-notes',
    // ],
    stories: [
      '~/stories/**/*.stories.js',
      // '~/custom/path/sample.stories.js'
    ],
  }
}

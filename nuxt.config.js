const Prismic = require('@prismicio/client');
require('dotenv').config()
export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    middleware: 'config'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CodeHat',
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

    '~/plugins/gtag',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/dotenv',

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
    modern: false,
    linkResolver: function (doc) {
      return '/'
    }
    /* see configuration for more */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: process.env.sitemap_host,
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    routes: async () => {
      var routes = [];
      const api = await Prismic.client(process.env.prismicEP)
      await api.query(
        Prismic.predicates.at("document.type", "post_type")
      ).then(function (doc) {
        routes = doc.results.map(p => `/blog/${p.uid}`);
        console.log(routes);
      }).catch(function (err) {
      })
      return routes
    }
  },





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

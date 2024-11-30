import config from './config'

export default defineNuxtConfig({
  ssr: false,
  // ssr:true,target:'static',

  css: ['~/public/fullpage.css', '~/assets/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: `${config.title} - ${config.description}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: config.metaDescription },
        { hid: 'keywords', name: 'keywords', content: config.metaKeywords },
      ],
      htmlAttrs: {
        lang: 'zh',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: config.favicon },
      ],
      script: [
        {
          src: '/fullpage.js',
          type: 'text/javascript',
          defer: true,
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      appEnv: process.env.NODE_ENV || 'development',
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      apiURL: process.env.API_URL || config.apiURL,
      apiKey: process.env.API_KEY || config.apiKey,
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    "@nuxt/image",
    // '@zadigetvoltaire/nuxt-gtm',
    // '@fullpage/nuxt-fullpage',
    "@stefanobartoletti/nuxt-social-share"
  ],
  // gtm: {
  //   id: config.gtmID,
  //   defer: false,
  // },
  site: {
    url: process.env.BASE_URL || 'http://localhost:1234',
  },
  sitemap: {
    cacheMaxAgeSeconds: 60 * 60 * 24,
    xsl: false,
    sitemaps: true,
    autoLastmod: true,
    sources: [
      '/api/__sitemap__/urls',
    ],
  },
  colorMode: {
    preference: 'light'
  },
})
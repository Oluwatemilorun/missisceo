import data from './data/articles.json'

let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `blog/${el.slug}`))
  })
}

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - MissisCEO',
    title: 'My Nuxtjs Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Gotu&family=Roboto&display=swap'
      },
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/pwa'],
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    optionsPath: '~/plugins/veutify.config.js'
  },
  // Generate product page
  generate: {
    routes: dynamicRoutes
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

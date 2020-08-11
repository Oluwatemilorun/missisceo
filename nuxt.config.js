export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - MissisCEO',
    title: 'Welcome to MissisCEO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Gotu&family=Poppins&display=swap'
      },
    ]
  },
  loading: { color: '#fa4589' },
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/pwa'],
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    optionsPath: '~/plugins/vuetify.config.js'
  },
  
  build: {
    extend (config, ctx) {
    }
  }
}

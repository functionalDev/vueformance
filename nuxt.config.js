module.exports = {
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '',
    extractCSS: true,
    babel: {
      presets: [
        'es2015',
        'stage-0'
      ],
      plugins: [
        [
          'transform-runtime', {
            'polyfill': true,
            'regenerator': true
          }
        ]
      ]
    },
    extend (config, ctx) {
      if (ctx.isDev) {
        config.resolve.alias['config'] = '~/config/development';
      } else {
        config.resolve.alias['config'] = '~/config/production';
      }
      config.resolve.alias['create-app'] = `./create-app-${ctx.isClient ? 'client' : 'server'}.js`;
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
};

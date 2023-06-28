const { environment } = require('@rails/webpacker')

environment.config.merge({
  resolve: {
    alias: {
      '@dashboard': path.resolve(__dirname, '../../app/javascript/dashboard'),
    },
  },
});

module.exports = environment

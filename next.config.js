const withPWA = require('next-pwa')

module.exports = withPWA({

    pwa: {
        dest: 'public',
        sw: 'service-worker.js',
      }
  });
const withPWA = require('next-pwa')

module.exports = withPWA({
    i18n: {
      locales: ["fr"],
      defaultLocale: "fr",
    },
    pwa: {
        dest: 'public',
        sw: 'service-worker.js',
      }
  });
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com',

    retries: {
      runMode: 2,
      openMode: 0,
    },

    video: false,

    setupNodeEvents(on, config) {
      // 🔹 Enable cypress-grep (for @smoke, @regression, etc.)
      require('cypress-grep/src/plugin')(config)
      return config
    },
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
})

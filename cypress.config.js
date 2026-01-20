import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com',

    retries: {
      runMode: 2,
      openMode: 0,
    },

    video: false,

    setupNodeEvents(on, config) {
      // No plugins needed for Cypress 15
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

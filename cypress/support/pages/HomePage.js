class HomePage {
  welcomeMessage() {
    return cy.contains('Welcome')
  }

  openNewAccountLink() {
    return cy.contains('Open New Account')
  }

  transferFundsLink() {
    return cy.contains('Transfer Funds')
  }

  logoutLink() {
    return cy.contains('Log Out')
  }
}

export default new HomePage()

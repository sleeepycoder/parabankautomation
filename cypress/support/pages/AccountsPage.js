class AccountsPage {

  accountsOverviewLink() {
    return cy.contains('Accounts Overview')
  }

  accountsTable() {
    return cy.get('#accountTable')
  }

  accountRows() {
    return cy.get('#accountTable tbody tr')
  }

  accountLinks() {
    return cy.get('#accountTable tbody tr td a')
  }

  balanceColumn() {
    return cy.get('#accountTable tbody tr td:nth-child(2)')
  }

  openFirstAccount() {
    this.accountLinks().first().click()
  }

  accountDetailsTitle() {
    return cy.contains('Account Details')
  }
}

export default new AccountsPage()

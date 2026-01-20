class BillPayPage {

  billPayLink() {
    return cy.contains('Bill Pay')
  }

  payeeName() {
    return cy.get('input[name="payee.name"]')
  }

  address() {
    return cy.get('input[name="payee.address.street"]')
  }

  city() {
    return cy.get('input[name="payee.address.city"]')
  }

  state() {
    return cy.get('input[name="payee.address.state"]')
  }

  zipCode() {
    return cy.get('input[name="payee.address.zipCode"]')
  }

  phone() {
    return cy.get('input[name="payee.phoneNumber"]')
  }

  account() {
    return cy.get('input[name="payee.accountNumber"]')
  }

  verifyAccount() {
    return cy.get('input[name="verifyAccount"]')
  }

  amount() {
    return cy.get('input[name="amount"]')
  }

  fromAccount() {
    return cy.get('select[name="fromAccountId"]')
  }

  sendPaymentButton() {
    return cy.get('input[value="Send Payment"]')
  }

  paymentCompleteMessage() {
    return cy.contains('Bill Payment Complete')
  }

  submitBillPayment(bill) {
    this.payeeName().type(bill.payeeName)
    this.address().type(bill.address)
    this.city().type(bill.city)
    this.state().type(bill.state)
    this.zipCode().type(bill.zip)
    this.phone().type(bill.phone)
    this.account().type(bill.account)
    this.verifyAccount().type(bill.account)
    this.amount().type(bill.amount)
    this.fromAccount().select(0)
    this.sendPaymentButton().click()
  }
}

export default new BillPayPage()

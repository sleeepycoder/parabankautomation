class TransferFundsPage {
  amountInput() {
    return cy.get('#amount');
  }

  fromAccountDropdown() {
    return cy.get('#fromAccountId');
  }

  toAccountDropdown() {
    return cy.get('#toAccountId');
  }

  transferButton() {
    return cy.get('input[value="Transfer"]');
  }

  transferCompleteMessage() {
    return cy.contains('Transfer Complete');
  }

  transferFunds(amount) {
    this.amountInput().clear().type(amount);

    // Select first available account (same for both if only one exists)
    this.fromAccountDropdown()
      .find('option')
      .first()
      .then(option => {
        const account = option.val();
        this.fromAccountDropdown().select(account);
        this.toAccountDropdown().select(account);
      });

    this.transferButton().click();
  }
}

export default new TransferFundsPage();

import LoginPage from '../../support/pages/LoginPage';
import TransferFundsPage from '../../support/pages/TransferFundsPage.js';

describe('Transfer Funds Tests @regression', () => {
  let user;

  before(() => {
    cy.fixture('userlogin').then(data => {
      user = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    LoginPage.login(user.username, user.password);
  });

  it('should transfer funds successfully', () => {
    cy.contains('Transfer Funds').click();
    TransferFundsPage.transferFunds('50');
    TransferFundsPage.transferCompleteMessage().should('be.visible');
  });
});

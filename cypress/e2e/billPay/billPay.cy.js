import LoginPage from '../../support/pages/LoginPage';
import BillPayPage from '../../support/pages/BillPayPage';

describe('Bill Pay Tests', () => {
  let bill;
  let user;

  before(() => {
    cy.fixture('billpay').then(data => {
      bill = data;
    });
    cy.fixture('userlogin').then(data => {
      user = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    LoginPage.login(user.username, user.password); // session-based login (CI safe)
  });

  it('should pay a bill successfully', () => {
    BillPayPage.billPayLink().click();
    BillPayPage.submitBillPayment(bill);

    BillPayPage.paymentCompleteMessage().should('be.visible');
  });
});

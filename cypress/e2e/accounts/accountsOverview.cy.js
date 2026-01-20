import LoginPage from '../../support/pages/LoginPage';
import AccountsPage from '../../support/pages/AccountsPage';

describe('Accounts Overview Tests @regression', () => {
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

  it('should display accounts overview table', () => {
    AccountsPage.accountsOverviewLink().click();
    AccountsPage.accountsTable().should('be.visible');
    AccountsPage.accountRows().should('have.length.greaterThan', 0);
  });

  it('should show account balances', () => {
    AccountsPage.accountsOverviewLink().click();
    AccountsPage.balanceColumn().each($balance => {
      expect($balance.text()).to.match(/\$/);
    });
  });

  it('should open account details page', () => {
    AccountsPage.accountsOverviewLink().click();
    AccountsPage.openFirstAccount();
    AccountsPage.accountDetailsTitle().should('be.visible');
  });
});

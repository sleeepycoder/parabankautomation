import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'

describe('Login Tests', () => {
  let user;
  beforeEach(() => {
      cy.fixture('userlogin').then((data) => {
      user = data
    });
    cy.visit('/');

  })

  it('should login successfully', () => {
    LoginPage.login(user.username, user.password)
    HomePage.welcomeMessage().should('contain', 'Welcome')
  });

  it('should fail login with invalid credentials', () => {
    LoginPage.login('invalidUser', 'wrongPassword')
    cy.get('.error').should('contain', 'An internal error has occurred and has been logged.')
  });

})

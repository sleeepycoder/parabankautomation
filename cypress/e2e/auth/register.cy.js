import { faker } from '@faker-js/faker';
import RegistrationPage from '../../support/pages/ RegistrationPage';

describe('User Registration', () => {
  let user;

  before(() => {
    cy.fixture('userRegistration').then(data => {
      user = {
        ...data,
         username: faker.internet.username({ length: 8 }).toLowerCase() +
                faker.number.int({ min: 100, max: 999 })
      };
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should register a new user successfully', () => {
    cy.get('a[href*="register.htm"]').click();
    RegistrationPage.register(user);
    cy.contains('Your account was created successfully').should('be.visible');
  });
});

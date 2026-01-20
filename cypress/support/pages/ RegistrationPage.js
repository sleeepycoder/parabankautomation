class RegistrationPage {
  firstName() {
    return cy.get('input[name="customer.firstName"]');
  }

  lastName() {
    return cy.get('input[name="customer.lastName"]');
  }

  address() {
    return cy.get('input[name="customer.address.street"]');
  }

  city() {
    return cy.get('input[name="customer.address.city"]');
  }

  state() {
    return cy.get('input[name="customer.address.state"]');
  }

  zipCode() {
    return cy.get('input[name="customer.address.zipCode"]');
  }

  phone() {
    return cy.get('input[name="customer.phoneNumber"]');
  }

  ssn() {
    return cy.get('input[name="customer.ssn"]');
  }

  username() {
    return cy.get('input[name="customer.username"]');
  }

  password() {
    return cy.get('input[name="customer.password"]');
  }

  confirmPassword() {
    return cy.get('input[name="repeatedPassword"]');
  }

  registerButton() {
    return cy.get('input[value="Register"]');
  }

  register(user) {
    this.firstName().type(user.firstName);
    this.lastName().type(user.lastName);
    this.address().type(user.address);
    this.city().type(user.city);
    this.state().type(user.state);
    this.zipCode().type(user.zip);
    this.phone().type(user.phone);
    this.ssn().type(user.ssn);
    this.username().type(user.username);
    this.password().type(user.password);
    this.confirmPassword().type(user.password);
    this.registerButton().click();
  }
}

export default new RegistrationPage();

class LoginPage {
  usernameInput() {
    return cy.get('input[name="username"]')
  }

  passwordInput() {
    return cy.get('input[name="password"]')
  }

  loginButton() {
    return cy.get('input[value="Log In"]')
  }

  login(username, password) {
    this.usernameInput().type(username)
    this.passwordInput().type(password)
    this.loginButton().click()
  }
}

export default new LoginPage()

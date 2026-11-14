describe("3.4 - Login with invalid credentials", () => {
  it("should show an error and keep the user on the login page", () => {
    cy.visit("/#/auth/login");

    cy.fixture("users").then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password);
    });

    cy.get('[data-test="login-error"]')
      .should("be.visible")
      .and("contain.text", "Invalid email or password");

    cy.url().should("include", "/auth/login");
    cy.get('[data-test="nav-sign-in"]').should("be.visible");
  });
});

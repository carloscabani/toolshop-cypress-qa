Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-test="email"]').type(email);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add('fillContactForm', (data) => {
  cy.get('[data-test="first-name"]').type(data.firstName).blur();
  cy.get('[data-test="last-name"]').type(data.lastName).blur();
  cy.get('[data-test="email"]').type(data.email).blur();
  cy.get('[data-test="subject"]').select(data.subject).blur();
  cy.get('[data-test="message"]').type(data.message).blur();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.visit('/');
  cy.contains('[data-test="product-name"]', productName).click();
  cy.url().should('include', '/product/');
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="cart-quantity"]').should('be.visible');
});

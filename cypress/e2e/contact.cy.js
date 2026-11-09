describe("3.3 - Contact form validations", () => {
  it("should display validation errors when submitting an empty form", () => {
    cy.visit("/#/contact");

    // Submit empty contact form
    cy.get('[data-test="contact-submit"]').click();

    // Verify First name validation
    cy.get('[data-test="first-name-error"]')
      .should("be.visible")
      .and("contain.text", "First name is required");

    // Verify Last name validation
    cy.get('[data-test="last-name-error"]')
      .should("be.visible")
      .and("contain.text", "Last name is required");

    // Verify E-mail validation
    cy.get('[data-test="email-error"]')
      .should("be.visible")
      .and("contain.text", "Email is required");

    // Verify Subject validation
    cy.get('[data-test="subject-error"]')
      .should("be.visible")
      .and("contain.text", "Subject is required");

    // Verify Message validation
    cy.get('[data-test="message-error"]')
      .should("be.visible")
      .and("contain.text", "Message is required");

    // Verify user remains on contact page
    cy.url().should("include", "/contact");
  });
});

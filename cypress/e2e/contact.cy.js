describe("3.3 - Contact form", () => {
  beforeEach(() => {
    cy.visit("/#/contact");
  });

  it("should send a valid message and display the confirmation", () => {
    cy.fixture("contact").then((contact) => {
      cy.fillContactForm(contact.validMessage);
    });

    cy.get('[data-test="contact-submit"]').click();

    cy.contains(".alert-success", "Thanks for your message!", { timeout: 10000 })
      .should("be.visible");
  });

  it("should display validation errors when submitting an empty form", () => {
    cy.get('[data-test="contact-submit"]').click();

    cy.get('[data-test="first-name-error"]')
      .should("be.visible")
      .and("contain.text", "First name is required");

    cy.get('[data-test="last-name-error"]')
      .should("be.visible")
      .and("contain.text", "Last name is required");

    cy.get('[data-test="email-error"]')
      .should("be.visible")
      .and("contain.text", "Email is required");

    cy.get('[data-test="subject-error"]')
      .should("be.visible")
      .and("contain.text", "Subject is required");

    cy.get('[data-test="message-error"]')
      .should("be.visible")
      .and("contain.text", "Message is required");

    cy.url().should("include", "/contact");
  });
});

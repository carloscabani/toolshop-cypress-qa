
describe('3.2 - Registration validations', () => {

    it('should display validation errors when submitting an empty form', () => {

        cy.visit('/#/auth/register');

        // Submit empty registration form
        cy.get('[data-test="register-submit"]').click();

        // Verify First name validation
        cy.get('[data-test="first-name-error"]')
            .should('be.visible')
            .and('contain.text', 'First name is required.');

        // Verify Last name validation
        cy.get('[data-test="last-name-error"]')
            .should('be.visible')
            .and('contain.text', 'Last name is required.');

        // Verify Date of Birth validation
        cy.get('[data-test="dob-error"]')
            .should('be.visible')
            .and('contain.text', 'Date of Birth is required.');

        // Verify Address validation
        cy.get('[data-test="address-error"]')
            .should('be.visible')
            .and('contain.text', 'Address is required.');

        // Verify Postcode validation
        cy.get('[data-test="postcode-error"]')
            .should('be.visible')
            .and('contain.text', 'Postcode is required.');

        // Verify City validation
        cy.get('[data-test="city-error"]')
            .should('be.visible')
            .and('contain.text', 'City is required.');

        // Verify State validation
        cy.get('[data-test="state-error"]')
            .should('be.visible')
            .and('contain.text', 'State is required.');

        // Verify Country validation
        cy.get('[data-test="country-error"]')
            .should('be.visible')
            .and('contain.text', 'Country is required.');

        // Verify Phone validation
        cy.get('[data-test="phone-error"]')
            .should('be.visible')
            .and('contain.text', 'Phone is required.');

        // Verify E-mail validation
        cy.get('[data-test="email-error"]')
            .should('be.visible')
            .and('contain.text', 'E-mail is required.');

        // Verify Password validation
        cy.get('[data-test="password-error"]')
            .should('be.visible')
            .and('contain.text', 'Password is required.');

        // Verify user remains on registration page
        cy.url().should('include', '/auth/register');

    });

});

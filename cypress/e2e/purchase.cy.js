describe('3.1 - Successful purchase', () => {

    it('should complete a purchase successfully', () => {

        cy.visit('/');

        // Open the first product
        cy.get('[data-test="product-1"]').click();

        // Add the product to the cart
        cy.get('[data-test="add-to-cart"]').click();

        // Open the cart
        cy.get('[data-test="nav-cart"]').click();

        // Verify that the product is in the cart
        cy.get('[data-test="product-title"]')
            .should('be.visible')
            .and('contain', 'Pliers');

        // Click the "Proceed to checkout" button
        cy.get('[data-test="proceed-1"]').click();


        cy.fixture('users').then((users) => {

            // Login
            cy.login(
                users.validUser.email,
                users.validUser.password
            );

            // Proceed to Address
            cy.get('[data-test="proceed-2"]').click();

            // Fill address form
            cy.get('[data-test="address"]')
                .should('be.visible')
                .clear()
                .should('have.value', '')
                .type(users.validUser.address)
                .should('have.value', users.validUser.address);

            cy.get('[data-test="city"]')
                .should('be.visible')
                .clear()
                .should('have.value', '')
                .type(users.validUser.city)
                .should('have.value', users.validUser.city);

            cy.get('[data-test="state"]')
                .clear()
                .type(users.validUser.state)
                .should('have.value', users.validUser.state);

            cy.get('[data-test="country"]')
                .clear()
                .type(users.validUser.country)
                .should('have.value', users.validUser.country);

            cy.get('[data-test="postcode"]')
                .clear()
                .type(users.validUser.postcode)
                .should('have.value', users.validUser.postcode);

            // Continue to next checkout step
            cy.get('[data-test="proceed-3"]')
                .should('be.enabled')
                .click();

            // Select payment method
            cy.get('[data-test="payment-method"]')
                .select('Cash on Delivery');

            // Fill payment information
            cy.get('[data-test="account-name"]')
                .type(users.validUser.payment.accountName);

            cy.get('[data-test="account-number"]')
                .type(users.validUser.payment.accountNumber);

            // First confirmation
            cy.get('[data-test="finish"]')
                .should('be.visible')
                .click();

            // Verify payment confirmation
            cy.contains('Payment was successful')
                .should('be.visible');

            // Second confirmation
            cy.get('[data-test="finish"]')
                .should('be.visible')
                .click();

            // Verify successful purchase
            cy.get('#order-confirmation', { timeout: 10000 })
                .should('be.visible')
                .and('contain.text', 'Thanks for your order!');

            // Verify invoice number
            cy.get('#invoice-number')
                .should('be.visible')
                .and('contain.text', 'INV-');

        });
    });
});

describe("3.6 - Remove a product from the cart", () => {
  it("should leave the cart empty after removing the product", () => {
    cy.fixture("products").then(({ cart }) => {
      cy.addProductToCart(cart.productName);

      cy.get('[data-test="nav-cart"]').click();
      cy.get('[data-test="product-title"]')
        .should("have.length", 1)
        .and("contain.text", cart.productName);
      cy.screenshot("cart-before-remove");

      cy.get("a.btn-danger").first().click();

      cy.screenshot("cart-after-remove");
      cy.get('[data-test="product-title"]').should("not.exist");
      cy.contains("The cart is empty").should("be.visible");
    });
  });
});

describe("3.5 - Product search", () => {
  it("should return products that match the searched term", () => {
    cy.visit("/");

    cy.fixture("products").then(({ search }) => {
      cy.get('[data-test="search-query"]').type(search.term);
      cy.get('[data-test="search-submit"]').click();

      cy.get('[data-test="search-term"]').should("have.text", search.term);

      cy.get('[data-test="product-name"]')
        .should("have.length.greaterThan", 0)
        .each(($product) => {
          expect($product.text().toLowerCase()).to.include(search.term.toLowerCase());
        });
    });
  });
});


describe('3.7 - API Testing', () => {

    it('should retrieve products and authenticate a user successfully', () => {

        // GET - Retrieve products list
        cy.request({
            method: 'GET',
            url: 'https://api-with-bugs.practicesoftwaretesting.com/products'
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.greaterThan(0);

        });

        // POST - Login with valid credentials
        cy.request({
            method: 'POST',
            url: 'https://api-with-bugs.practicesoftwaretesting.com/users/login',
            body: {
                email: 'customer@practicesoftwaretesting.com',
                password: 'welcome01'
            }
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('access_token');

        });

    });

});

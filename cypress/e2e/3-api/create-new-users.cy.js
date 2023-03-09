/// <reference types="cypress" />

describe('Add a new user', () => {
    it('Successfully add a new user', () => {
        var user = {
            "name": "hasib pramana",
            "job": "test engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body).to.have.property("name", "hasib pramana")
            expect(response.body).to.have.property("job", "test engineer")
        })
    })
})
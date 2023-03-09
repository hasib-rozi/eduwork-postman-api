/// <reference types="cypress" />

describe('Add a new user', () => {
    it('Successfully add a new user', () => {
        var user = {
            "name": "hasib pramana",
            "job": "test engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
    })
})
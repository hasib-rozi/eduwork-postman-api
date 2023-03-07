/// <reference types="cypress" />

describe('Get Users', () => {
    it('Verify the users list will displayed', () => {
        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})
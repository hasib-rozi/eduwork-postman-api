/// <reference types="cypress" />

describe('Validate header and body response', () => {
    it.only('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })

    it('Validate body response', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})
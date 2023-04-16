/// <reference types="cypress" />

describe('Validate body content', () => {
  it('Body content validation is successfully', () => {
      cy.request('https://pokeapi.co/api/v2/ability/7/').as('pokemon')
      cy.get('@pokemon').its('body').should('include', {name: 'limber'})
  })
})
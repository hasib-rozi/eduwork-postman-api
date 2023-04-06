/// <reference types="cypress" />

describe('Create new user with bearer token', () => {
  it('Successfully create new user', () => {
      cy.createUser()
  })
})

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/home')
  cy.get('input[name=q]').type(query).parent('form').submit()
})

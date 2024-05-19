describe('Search product', () => {
  it('should be able to search for a products', () => {
    cy.searchByQuery('Moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=Moletom')

    cy.get('a[href^="/products"]').should('exist')
  })

  it('should not be able to visit search page without search query', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('/search')

    cy.location('pathname').should('eq', '/home')
  })
})

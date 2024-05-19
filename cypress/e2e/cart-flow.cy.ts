describe('Cart flow', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('should render home page correctly with title "devstore" on the screen when visiting "/home"', () => {
    cy.get('h1').contains('devstore')
  })

  it('should redirect to "/products" when clicking on the first product', () => {
    cy.get('a[href^="/products"]').first().click()

    // cy.url().should('include', '/products')
    cy.location('pathname').should('include', '/products')
  })

  it('should be able to navigate with pathname to the product page and add it to the cart and show modal with the correct message', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')
    cy.contains('button', 'Adicionar ao carrinho').click()

    cy.contains('Carrinho (1)').should('be.visible')

    cy.get('[data-testid="modal-added"]').should('be.visible')
    cy.contains('Moletom Never Stop Learning adicionado ao carrinho.').should(
      'be.visible',
    )
  })

  it('should click on remove from cart button and show modal with correct message', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')
    cy.contains('button', 'Remover do carrinho').click()

    cy.contains('Carrinho (0)').should('be.visible')

    cy.get('[data-testid="modal-removed"]').should('be.visible')
    cy.contains('Moletom Never Stop Learning removido do carrinho.').should(
      'be.visible',
    )
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })
})

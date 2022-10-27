describe('newspec', () => {
    it('doess not do much', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      cy.get()
      

      cy.url().should('include', '/commands/actions')
    
    })
  })
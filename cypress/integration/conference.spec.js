describe('test suite', () => {
    beforeEach('runs this code block', () => {
        cy.visit('/conference/sessions')
        cy.url().should('include','/sessions')
        cy.viewport('macbook-16')
        
    })
  
    it('should route to the page', () => {
        cy.intercept('http://localhost:4000/graphql').as('backend')
        cy.get('[data-test=Thursday]').should('exist').click()
        
    })
})
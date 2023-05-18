describe('test suite', () => {
    beforeEach('runs this code block', () => {
        cy.visit('/conference/sessions')
        cy.url().should('include','/sessions')
        cy.viewport('macbook-16')
        
    })
  
    it('should route to the page', () => {
        cy.get('[data-test=Thursday]').should('exist').click()
    })
})
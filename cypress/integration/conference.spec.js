describe('test suite', () => {
    beforeEach('runs this code block', () => {
        cy.visit('/conference/sessions')
        cy.url().should('include','/sessions')
        
        
    })
    
    
})
describe('test suite', () => {
    beforeEach('runs this code block', () => {
        cy.visit('/conference/sessions')
        cy.url().should('include','/sessions')
        cy.viewport('macbook-16')
        
    })
    afterEach('collapse everything', () => {
        cy.viewport('iphone-x')
    })
    context('Thursday Button', () => {
        it('should route to the page', () => {
            cy.intercept('POST','/graphql',{fixture: 'example'}).as('backend')
            
            
        })
    })
})
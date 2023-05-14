describe('test suite', () => {
    beforeEach('runs this code block', () => {
        cy.visit('/conference/sessions')
        cy.url().should('include','/sessions')
        cy.viewport('macbook-16')
        cy.get('[data-test=Thursday]').as('ThursdayBtn')
    })
    context('route url', () => {
    it('should route to the url', () =>{
            cy.intercept('http://localhost:4000/graphql').as('response')
        })
    })
    context
    
})
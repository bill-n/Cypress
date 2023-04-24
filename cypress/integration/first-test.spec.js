describe('cypress test', () => {
    beforeEach('route to base url', () => {
        cy.visit('/')
    })
    it('should navigate to conference session page', () => {
        cy.get('.text-center').should('have.text','SIGN UP TODAY')
    })

})
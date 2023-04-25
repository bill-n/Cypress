describe('landing page', () => {
    // some_text = 'SIGN UP TODAY'
    beforeEach('route to base url', () => {
        cy.visit('/')
    })
    it('should navigate ', () => {
        cy.get('.text-center').contains('SIGN UP TODAY')
    })

})
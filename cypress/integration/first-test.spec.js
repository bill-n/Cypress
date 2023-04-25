describe('landing page', () => {
    // some_text = 'SIGN UP TODAY'
    beforeEach('route to base url', () => {
        cy.visit('/')
        cy.viewport(1200,720)
    })
    it('should navigate to our story', () => {
        cy.get('.nav-link').contains('Our story').click()
    })

})
describe('Session Page', () => {
    it('should route to session page', () => {
        cy.get('h1').contains('View Sessions').click()
        cy.url().should('include','/sessions')
    })
})
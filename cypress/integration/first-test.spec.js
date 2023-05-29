describe('describe block', () => {
    context('context block', () =>{
        beforeEach('this is before each block', () => {
            cy.viewport(1800,1100)
            cy.visit('/users')
            cy.url().should('include','/users')
        })
    })
    context('testing buttons on the UI', () => {
        it('should check for login functionality', () => {
        cy.get("li").should('exist').click()
        cy
        })
    })
})
describe('describe block', () => {
    context('context block', () =>{
        beforeEach('this is before each block', () => {
            cy.viewport(1800,1100)
            cy.visit('/users')
            cy.url().should('include','/users')
        })
    })
    context('testing buttons on the UI', () => {
        cy.get("li").should('exist')
        cy.get("li").should('exist').click()
        cy.get("[input-type=text]").type('username')
        cy.get("#password").type(`password{enter}`)
    })

})
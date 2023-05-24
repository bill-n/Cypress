describe('describe block', () => {
    context('context block', () =>{
        beforeEach('this is before each block', () => {
            cy.viewport(1800,1100)
            cy.visit('/users')
        })
    })
    context('testing buttons on the UI', () => {
        
    })

})
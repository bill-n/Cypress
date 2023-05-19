Cypress.Commands.add('dt', (value) => {
    cy.get(`[data-test=${value}]`)
})
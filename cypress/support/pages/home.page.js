const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('irAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})
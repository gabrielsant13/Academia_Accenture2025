import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


When('valido a pagina {string} - vehicle_data', pagina => {
    cy.validarPagina(pagina)
})


And('preencho a aba Enter Vehicle Data - vehicle_data', () => {
    cy.cadInfos()
})

And('valida se os campos obrigatorios estao preenchidos - vehicle_data', () => {
    cy.validaCamposObrigatorios()
})
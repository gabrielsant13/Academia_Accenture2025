import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


When('o usuario valida a pagina {string} - vehicle_data', paginaVehicle => {
    cy.validarPagina(paginaVehicle)
})


And('preenche a aba Enter Vehicle Data - vehicle_data', () => {
    cy.cadInfos()
})

And('valida se os campos obrigatorios estao preenchidos - vehicle_data', () => {
    cy.validaCamposObrigatorios()
})

And('avanca para a pagina seguinte - vehicle_data', () => {
    cy.avancarForm()
})
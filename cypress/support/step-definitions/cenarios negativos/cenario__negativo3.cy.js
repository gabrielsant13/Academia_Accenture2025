import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuario acessa o portal Tricentis - home', () => {
    cy.visit('/')
})

And('navega ate a area de cadastro de automovel - home', () => {
    cy.irAutomobile()
})

And('o usuario valida a aba - vehicle_data', () => {
    cy.validarPaginaVehicle()
})

And('preenche a aba Enter Vehicle Data - vehicle_data', () => {
    cy.cadInfosVehicle()
})

And('valida se os campos obrigatorios estao preenchidos - vehicle_data', () => {
    cy.validaCamposObrigatoriosVehicle()
    cy.avancarFormVehicle()
})

And('preenche a aba Enter Insurance Data - insurant_data', () => {
    cy.cadInfosInsurant()
})

And('valida se os campos obrigatorios estao preenchidos - insurant_data', () => {
    cy.validaCamposObrigatoriosInsurant()
    cy.avancarFormInsurant()
})

And('avanca para a aba Price Option - product_data', () => {
    cy.avancarFormProduct()
})

Then('valida se os campos obrigatorios anteriores estao preenchidos - price_option', () => {
    cy.validaCamposObgAntNeg()
})
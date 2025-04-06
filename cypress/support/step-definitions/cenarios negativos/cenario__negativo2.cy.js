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

And('preenche a aba Enter Product Data - product_data', () => {
    cy.cadInfosProduct()
})

And('valida se os campos obrigatorios estao preenchidos - product_data', () => {
    cy.validaCamposObrigatoriosProduct()
    cy.avancarFormProduct()
})

Then('valida se o botao NEXT esta disponivel - price_option', () => {
    cy.validaBotaoPriceNeg()
})
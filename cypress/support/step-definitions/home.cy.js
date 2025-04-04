import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis - home', () => {
    cy.visit('/')
})

And('navego ate a area de cadastro de automovel - home', () => {
    cy.irAutomobile()
})
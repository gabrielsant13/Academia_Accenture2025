import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuario acessa o portal Tricentis - home', () => {
    cy.visit('/')
})

And('navega ate a area de cadastro de automovel - home', () => {
    cy.irAutomobile()
})
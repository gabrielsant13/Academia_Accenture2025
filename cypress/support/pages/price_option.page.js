import { faker } from '@faker-js/faker'

const seletores = {
    SILVER: '#selectsilver',
    GOLD: '#selectgold',
    LATINUM: '#selectplatinum',
    ULTIMAT: '#selectultimate',
    BTN_NEXT: '#nextsendquote',
    VALIDAROBRIGATORIO_PRICE: '#selectpriceoption',
    VALIDARCAMPOSOBRIGATORIOSANT: '#xLoaderPrice'
}

const variaveis = {
    selecao: faker.number.int({ min: 1, max: 4 })
}

Cypress.Commands.add('cadInfosPrice', () => {
    if (variaveis.selecao == 1) {
        cy.get(seletores.SILVER).click({ force: true})
    } else if (variaveis.selecao == 2) {
        cy.get(seletores.GOLD).click({ force: true})
    } else if (variaveis.selecao == 3) {
        cy.get(seletores.LATINUM).click({ force: true})
    } else {
        cy.get(seletores.ULTIMAT).click({ force: true})
    }
    cy.log('✅ Price Option selecionado com sucesso')
})

Cypress.Commands.add('validaCamposObrigatoriosPrice', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_PRICE).should('contain','0')
    cy.log('✅ Validacao de campos obrigatorios realizados')
})

Cypress.Commands.add('validaCamposObrigatoriosPriceNegat', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_PRICE).should('not.contain','0')
    cy.log('❌ Campos obrigatórios não preenchidos')
})

Cypress.Commands.add('validaBotaoPriceNeg', () => {
    cy.get(seletores.BTN_NEXT).should('not.be.visible')
    cy.log('❌ Botão NEXT não visível')
})

Cypress.Commands.add('validaCamposObgAntNeg', () => {
    cy.get(seletores.VALIDARCAMPOSOBRIGATORIOSANT).find('p')
      .should('contain','Please, complete the first three steps to see the price table.')
    cy.log('❌ Algum Campo anterior a esta aba não foi preenchido')
})

Cypress.Commands.add('avancarFormPrice', () => {
    cy.get(seletores.BTN_NEXT).click()
})
import { faker } from '@faker-js/faker'
import moment from "moment"

const seletores = {
    VALIDAROBRIGATORIO_PRODUCT: '#enterproductdata',
    STARTDATE: '#startdate',
    INSURANCESUM: '#insurancesum',
    MERITRATING: '#meritrating',
    DAMAGEINSURANCE: '#damageinsurance',
    OPTIONAL_EURO: '#EuroProtection',
    OPTIONAL_LEGAL: '#LegalDefenseInsurance',
    COURTESYCAR: '#courtesycar',
    BTN_NEXT: '#nextselectpriceoption'
}

const variaveis = {
    startdate: moment().add(1, 'months').add(1,'day').format('MM/DD/YYYY'),
    insurancesum: faker.number.int({ min: 1, max: 9 }),
    meritrating: faker.number.int({ min: 1, max: 18 }),
    damageinsurance: faker.number.int({ min: 1, max: 3 }),
    courtesycar: faker.number.int({ min: 1, max: 2 })
}

Cypress.Commands.add('cadInfosProduct', () => {
    cy.get(seletores.STARTDATE).type(variaveis.startdate)
    cy.get(seletores.INSURANCESUM).select(variaveis.insurancesum)
    cy.get(seletores.MERITRATING).select(variaveis.meritrating)
    cy.get(seletores.DAMAGEINSURANCE).select(variaveis.damageinsurance)
    
    var selecao = faker.number.int({ min: 0, max: 2 })
    if (selecao == 0) {
        cy.get(seletores.OPTIONAL_EURO).click({ force: true})
    } else if (selecao == 1) {
        cy.get(seletores.OPTIONAL_LEGAL).click({ force: true})
    } else {
        cy.get(seletores.OPTIONAL_EURO).click({ force: true})
        cy.get(seletores.OPTIONAL_LEGAL).click({ force: true})
    }

    cy.get(seletores.COURTESYCAR).select(variaveis.courtesycar)
    cy.log('✅ Formulario de Product Data preenchido com sucesso')
 })

Cypress.Commands.add('validaCamposObrigatoriosProduct', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_PRODUCT).should('contain','0')
    cy.log('✅ Validacao de campos obrigatorios realizados')
})

Cypress.Commands.add('avancarFormProduct', () => {
    cy.get(seletores.BTN_NEXT).click()
})
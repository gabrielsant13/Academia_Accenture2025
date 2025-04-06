import { faker } from '@faker-js/faker'
import moment from "moment"

const seletores = {
    VALIDAROBRIGATORIO_INSURANT: '#enterinsurantdata',
    FIRST_NAME: '#firstname',
    LAST_NAME: '#lastname',
    DATE_BIRTH: '#birthdate',
    GENDER_MALE: '#gendermale',
    GENDER_FEMALE: '#genderfemale',
    STREET_ADDRESS: '#streetaddress',
    COUNTRY: '#country',
    ZIPCODE: '#zipcode',
    CITY: '#city',
    OCCUPATION: '#occupation',
    SPEEDING: '#speeding',
    BUNGEEJUMPING: '#bungeejumping',
    CLIFFDIVING: '#cliffdiving',
    SKYDIVING: '#skydiving',
    OTHER: '#other',
    WEBSITE: '#website',
    PICTURE: '#picturecontainer',
    BTN_NEXT: '#nextenterproductdata'
}

const variaveis = {
    datebirth: moment(faker.date.birthdate({min: 18, max: 69, mode: 'age'})).format('MM/DD/YYYY'),
    firstname: faker.name.firstName().replace(/[^a-zA-Z]/g, ''),
    lastname: faker.name.lastName().replace(/[^a-zA-Z]/g, ''),
    streetaddress: faker.address.streetAddress(),
    country: faker.number.int({ min: 1, max: 249 }),
    zipcode: faker.number.int({ min: 1000, max: 99999999 }),
    city: faker.address.city(),
    occupation: faker.number.int({ min: 1, max: 5 }),
    website: faker.internet.url(),
    picture: 'cypress/picture/picture.jpeg'
}

Cypress.Commands.add('cadInfosInsurant', () => {
    cy.get(seletores.FIRST_NAME).type(variaveis.firstname)
    cy.get(seletores.LAST_NAME).type(variaveis.lastname)
    cy.get(seletores.DATE_BIRTH).type(variaveis.datebirth)   
    
    if (faker.number.int({ min: 0, max: 1 })) {
        cy.get(seletores.GENDER_MALE).click({ force: true})
    } else {
        cy.get(seletores.GENDER_FEMALE).click({ force: true})
    }
    
    cy.get(seletores.STREET_ADDRESS).type(variaveis.streetaddress)
    cy.get(seletores.COUNTRY).select(variaveis.country)
    cy.get(seletores.ZIPCODE).type(Cypress.env("zipcode"), {log: false})
    cy.get(seletores.CITY).type(variaveis.city)
    cy.get(seletores.OCCUPATION).select(variaveis.occupation)

    var selecao = faker.number.int({ min: 1, max: 5 })
    if (selecao == 1) {
        cy.get(seletores.SPEEDING).click({ force: true})
    } else if (selecao == 2) {
        cy.get(seletores.BUNGEEJUMPING).click({ force: true})
    } else if (selecao == 3) {
        cy.get(seletores.CLIFFDIVING).click({ force: true})
    } else if (4) {
        cy.get(seletores.SKYDIVING).click({ force: true})
    } else {
        cy.get(seletores.OTHER).click({ force: true})
    }

    cy.get(seletores.WEBSITE).type(variaveis.website)
    cy.get(seletores.PICTURE).selectFile(variaveis.picture, { force: true})
    cy.log('✅ Formulario de Insurant Data preenchido com sucesso')
})

Cypress.Commands.add('validaCamposObrigatoriosInsurant', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_INSURANT).should('contain','0')
    cy.log('✅ Validacao de campos obrigatorios realizados')
})

Cypress.Commands.add('avancarFormInsurant', () => {
    cy.get(seletores.BTN_NEXT).click()
})
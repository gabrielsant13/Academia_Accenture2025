import { faker } from '@faker-js/faker'
import moment from "moment"

const seletores = {
    MAKE: '#make',
    ENGINE_PERFORMANCE: '#engineperformance',
    DATE_MANUFACTURE: '#dateofmanufacture',
    NUMBER_SEATS: '#numberofseats',
    FUEL_TYPE: '#fuel',
    LIST_PRICE: '#listprice',
    LICENSE_PLATE_NUMBER: '#licenseplatenumber',
    ANNUAL_MILEAGE: '#annualmileage',
    BTN_NEXT: '#nextenterinsurantdata',
    VALIDAROBRIGATORIO_VEHICLE: '#entervehicledata'
}

const variaveis = {
    make: Math.floor(Math.random() * 14 + 1),
    engine_performance: faker.number.int({ min: 1, max: 2000 }),
    date_manufacture: moment(faker.date.past()).format('MM/DD/YYYY'),
    number_seats: faker.number.int({ min: 1, max: 9 }),
    fuel_type: faker.number.int({ min: 1, max: 5 }),
    list_price: faker.number.int({ min: 500, max: 100000 }),
    annual_mileage: faker.number.int({ min: 100, max: 100000 })
}

const dadosSensiveis = {
    license_plate: faker.string.alpha({ length: 3 }).toUpperCase() + faker.number.int({ min: 1000, max: 9999 })
}

Cypress.Commands.add('validarPaginaVehicle', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_VEHICLE).should('be.visible')
    cy.log('✅ Pagina validada com sucesso')
})

Cypress.Commands.add('cadInfosVehicle', () => {

    Cypress.env('license_plate', dadosSensiveis.license_plate)

    cy.get(seletores.MAKE).select(variaveis.make)
    cy.get(seletores.ENGINE_PERFORMANCE).type(variaveis.make)
    cy.get(seletores.DATE_MANUFACTURE).type(variaveis.date_manufacture)
    cy.get(seletores.NUMBER_SEATS).select(variaveis.number_seats)
    cy.get(seletores.FUEL_TYPE).select(variaveis.fuel_type)
    cy.get(seletores.LIST_PRICE).type(variaveis.list_price)
    cy.get(seletores.LICENSE_PLATE_NUMBER).type(Cypress.env('license_plate'), {log: false})
    cy.get(seletores.ANNUAL_MILEAGE).type(variaveis.annual_mileage)
    cy.log('✅ Formulario de Vehicle Data preenchido com sucesso')
})

Cypress.Commands.add('validaCamposObrigatoriosVehicle', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_VEHICLE).should('contain','0')
    cy.log('✅ Validacao de campos obrigatorios realizados')
})

Cypress.Commands.add('avancarFormVehicle', () => {
    cy.get(seletores.BTN_NEXT).click()
})
import faker from "faker-br"
import moment from "moment"

const VLD_PAGE = '#selectedinsurance'

const MAKE = '#make'
const ENGINE_PERFORMANCE = '#engineperformance'
const DATE_MANUFACTURE = '#dateofmanufacture'
const NUMBER_SEATS = '#numberofseats'
const FUEL_TYPE = '#fuel'
const LIST_PRICE = '#listprice'
const LICENSE_PLATE_NUMBER = '#licenseplatenumber'
const ANNUAL_MILEAGE = '#annualmileage'

const VALIDAROBRIGATORIO = '#entervehicledata > .counter'

const BTN_NEXT = '#nextenterinsurantdata'


Cypress.Commands.add('validarPagina', pagina => {
    cy.get(VLD_PAGE).should('contain', pagina)
    cy.log('Pagina validada com sucesso')
})

Cypress.Commands.add('cadInfos', () => {
    cy.get(MAKE).select(Math.floor(Math.random() * 14 + 1))
    cy.log('Make preenchido')

    //cy.get(ENGINE_PERFORMANCE).type(Math.floor(Math.random() * 2000 + 1))
    cy.get(ENGINE_PERFORMANCE).type(faker.random.number({ min: 1, max: 2000 }))
    cy.log('Engine Performance preenchida')

    cy.get(DATE_MANUFACTURE).type(moment(faker.date.past()).format('MM/DD/YYYY'))
    cy.log('Date of Manufacture preenchido')

    cy.get(NUMBER_SEATS).select(faker.random.number({ min: 1, max: 9 }))
    cy.log('Number of Seats preenchido')

    cy.get(FUEL_TYPE).select(faker.random.number({ min: 1, max: 5 }))
    cy.log('Fuel Type preenchido')

    cy.get(LIST_PRICE).type(faker.random.number({ min: 500, max: 100000 }))
    cy.log('List Price preenchido')

    cy.get(LICENSE_PLATE_NUMBER).type(faker.random.alpha({ count: 3 }).toUpperCase() + faker.random.number({ min: 1000, max: 9999 }), {log: false})
    cy.log('License Plate Number preenchido')

    cy.get(ANNUAL_MILEAGE).type(faker.random.number({ min: 100, max: 100000 }))
    cy.log('Annual Mileage preenchido')
})

Cypress.Commands.add('validaCamposObrigatorios', () => {
    cy.get(VALIDAROBRIGATORIO).should('contain','0')
})

Cypress.Commands.add('avancarForm', () => {
    cy.get(BTN_NEXT).click()
})
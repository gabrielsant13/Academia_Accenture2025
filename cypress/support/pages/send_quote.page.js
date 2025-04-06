import { faker } from '@faker-js/faker'

const seletores = {
    EMAIL: '#email',
    PHONE: '#phone',
    USERNAME: '#username',
    PASSWORD: '#password',
    CONFIRMPASSWORD: '#confirmpassword',
    COMMENTS: '#Comments',
    VALIDAROBRIGATORIO_SEND: '#sendquote',
    BTN_SEND: '#sendemail',
    VALIDAENVIO: '.sweet-alert',
    BTN_FIM: '.confirm'
}

const vairaveis = {
    comments: faker.lorem.sentence()
}

Cypress.Commands.add('cadInfosSend', () => {
    cy.get(seletores.EMAIL).type(Cypress.env('email'), {log: false})
    cy.get(seletores.PHONE).type(Cypress.env('phone'), {log: false})
    cy.get(seletores.USERNAME).type(Cypress.env('username'), {log: false})
    cy.get(seletores.PASSWORD).type(Cypress.env('password'), {log: false})
    cy.get(seletores.CONFIRMPASSWORD).type(Cypress.env('password'), {log: false})
    cy.get(seletores.COMMENTS).type(vairaveis.comments)
    cy.log('✅ Formulario de Send Quote preenchido com sucesso')
})

Cypress.Commands.add('validaCamposObrigatoriosSend', () => {
    cy.get(seletores.VALIDAROBRIGATORIO_SEND).should('contain','0')
    cy.log('✅ Validacao de campos obrigatorios realizados')
})

Cypress.Commands.add('enviarFormSend', () => {
    cy.get(seletores.BTN_SEND).click()
})

Cypress.Commands.add('validaEnvio', () => {
    cy.get(seletores.VALIDAENVIO, {timeout: 15000}).should('be.visible')
    cy.get(seletores.VALIDAENVIO).find('h2').should('contain','Sending e-mail success!')
    cy.wait(2000)
    cy.get(seletores.BTN_FIM).click()
    cy.log('✅ Todas as validacoes foram realizadas com sucesso')
})
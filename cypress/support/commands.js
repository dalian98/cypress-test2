// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//管理员登录

Cypress.Commands.add('adminlogin', (username, password) => {
    cy.visit('http://192.168.10.110/ui/#/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.ant-btn').click()
    cy.get('.slider___2xiOR').click()
})
//银行或政府登录
Cypress.Commands.add('banklogin', (username, password) => {
    cy.visit('http://192.168.10.111/istui/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.ant-btn').click()
    cy.get('.slider___2xiOR').click()
})
//普通用户-企业登录
Cypress.Commands.add('companylogin', (code, phone, password) => {
    cy.visit('http://192.168.10.112/cui/login')
    cy.get('#accountNo').type(code)
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('[style="padding-top: 20px;"] > .ant-btn-primary').click()
    cy.get('.slider___2xiOR').click()
})
//个人用户登录
Cypress.Commands.add('userlogin', (phone, password) => {
    cy.visit('http://192.168.10.112/cui/login')
    cy.get('.ant-select-selection__rendered').click()
    cy.get('.ant-select-dropdown-menu > [aria-selected="false"]').click()
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('[style="padding-top: 20px;"] > .ant-btn-primary').click()
    cy.get('.slider___2xiOR').click()
})

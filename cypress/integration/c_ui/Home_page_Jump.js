import {home_page_jump} from '../../fixtures/c_ui_location/Home_page_Jump_location'

describe('首页导航跳转',function(){
    beforeEach('进入互联网界面',()=>{
        cy.visit('http://192.168.10.112/cui/home')
    })
    it('融资服务跳转', () => {
        cy.get(home_page_jump.financing_services).click()
        cy.url().should('contain','financing')
    });
    it('专项特色融资跳转', () => {
        cy.get(home_page_jump.special_financing).click()
        cy.url().should('contain','financingSpecial')
    });
    it('政策服务跳转', () => {
        cy.get(home_page_jump.policy_services).click()
        cy.url().should('contain','policy')
    });
    it('财经互动跳转', () => {
        cy.get(home_page_jump.financial_interaction).click()
        cy.url().should('contain','financialInteraction')
    });
    it('信用体系建设跳转', () => {
        cy.get(home_page_jump.credit_system).click()
        cy.url().should('contain','creditEvaluate')
    });
    it('工程信用库跳转', () => {
        cy.get(home_page_jump.project_credit_database).click()
        cy.url().should('contain','projectCreditBase')
    });
    it('关于我们跳转', () => {
        cy.get(home_page_jump.about_us).click()
        cy.url().should('contain','about')
    });
    
})
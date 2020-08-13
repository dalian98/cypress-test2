import {financial_interaction} from '../../fixtures/financial_interaction_location/financial_interaction_location'

describe('财经互动-测试用例集',function(){
    it('查询遂宁市船山区2018年度数据',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get(financial_interaction.financial_interaction).click()
        cy.get(financial_interaction.suining).click()
        cy.get(financial_interaction.chuanshan).click()
        cy.get(financial_interaction.year).click()
        cy.get(financial_interaction.year_2018).click()
        cy.get(financial_interaction.query_btn).click()
        cy.get(financial_interaction.result_1).should('exist')
    })
    it('查询遂宁市船山区2019年度数据',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get(financial_interaction.financial_interaction).click()
        cy.get(financial_interaction.suining).click()
        cy.get(financial_interaction.chuanshan).click()
        cy.get(financial_interaction.year).click()
        cy.get(financial_interaction.year_2019).click()
        cy.get(financial_interaction.query_btn).click()
        cy.get(financial_interaction.result_2).should('exist')
    })
    it('查询后重置',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get(financial_interaction.financial_interaction).click()
        cy.get(financial_interaction.suining).click()
        cy.get(financial_interaction.chuanshan).click()
        cy.get(financial_interaction.year).click()
        cy.get(financial_interaction.year_2019).click()
        cy.get(financial_interaction.query_btn).click()
        cy.get(financial_interaction.result_2).should('exist')
        cy.get(financial_interaction.reset_btn).click()
        cy.get(financial_interaction.result_3).should('exist')
    })

})
import {policy_services} from '../../fixtures/policy_services/policy_services_loction'

describe('政策服务测试用例集',function(){
    this.beforeEach('访问政策服务界面',function(){
        cy.visit('http://192.168.10.112/cui/policy')
    })
    it('搜索政策信息',function(){
        cy.get(policy_services.query_input).type('关于')
        cy.get(policy_services.query_btn).click()
        cy.get(policy_services.result_1).should('contain.text','关于')
    })
    it('查看政策服务详情', () => {
        cy.get(policy_services.query_input).type('关于')
        cy.get(policy_services.query_btn).click()
        cy.get(policy_services.result_1).should('contain.text','关于')
        cy.get(policy_services.result_1).click()
        cy.url().should('contain','cui/policy/detail?id=')
    })
    it('中央查看更多', () => {
        cy.get(policy_services.more_1).click()
        cy.get(policy_services.title).should('contain','中央政策')
    })
    it('市州查看更多', () => {
        cy.get(policy_services.more_2).click()
        cy.get(policy_services.title).should('contain','市州政策')
    })
    it('债券融资中央查看更多', () => {
        cy.get(policy_services.more_3).click()
        cy.get(policy_services.title).should('contain','债券融资 - 中央政策')
    })
    it('债券融资市州查看更多', () => {
        cy.get(policy_services.more_4).click()
        cy.get(policy_services.title).should('contain','债券融资 - 省级政策')
    })
    it('财金互动中央查看更多', () => {
        cy.get(policy_services.more_5).click()
        cy.get(policy_services.title).should('contain','财金互动 - 中央政策')
    })
    it('财金互动省级查看更多', () => {
        cy.get(policy_services.more_6).click()
        cy.get(policy_services.title).should('contain','财金互动 - 省级政策')
    })
    it('综合政策中央查看更多', () => {
        cy.get(policy_services.more_7).click()
        cy.get(policy_services.title).should('contain','综合政策 - 中央政策')
    })
    it('综合政策市州查看更多', () => {
        cy.get(policy_services.more_8).click()
        cy.get(policy_services.title).should('contain','综合政策 - 省级政策')
    })
    it('信贷融资中央查看更多', () => {
        cy.get(policy_services.more_9).click()
        cy.get(policy_services.title).should('contain','信贷融资 - 中央政策')
    })
    it('信贷融资市州查看更多', () => {
        cy.get(policy_services.more_10).click()
        cy.get(policy_services.title).should('contain','信贷融资 - 市州政策')
    })


})
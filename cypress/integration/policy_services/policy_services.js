import {policy_services} from '../../fixtures/policy_services/policy_services_loction'

describe('政策服务测试用例集',function(){
    it('搜索政策信息',function(){
        cy.visit('http://192.168.10.112/cui/policy')
        cy.get(policy_services.query_input).type('关于')
        cy.get(policy_services.query_btn).click()
        cy.get(policy_services.result_1).should('contain.text','关于')
    })
})
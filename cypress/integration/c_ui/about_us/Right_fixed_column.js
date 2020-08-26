import {right_column} from '../../../fixtures/c_ui_location/about_us_location/about_us_location'

describe('右侧固定栏跳转路径是否正确',function(){
    beforeEach('登录c端',function(){
        cy.userlogin('13350009266','admin@123')
    })
    it('广播融资',function(){
        cy.get(right_column.financing).click()
        cy.get(right_column.broadcasting_financing).click()
        cy.url().should('eql','http://192.168.10.112/cui/financing/direction')
        
    })
    it('常见问题',function(){
        cy.get(right_column.financing).click()
        cy.get(right_column.normal_question).click()
        cy.url().should('eql','http://192.168.10.112/cui/about?id=commonProblem')
    })
    it('通知公告',function(){
        cy.get(right_column.financing).click()
        cy.get(right_column.notice).click()
        cy.url().should('eql','http://192.168.10.112/cui/about?id=notice')
    })
    it('联系方式',function(){
        cy.get(right_column.financing).click()
        cy.get(right_column.phone).click()
        cy.url().should('eql','http://192.168.10.112/cui/about?id=contact')
    })
})
import {about_us} from '../../../fixtures/c_ui_location/about_us_location/about_us_location'


describe('关于我们模块测试用例集',function(){
    beforeEach('进入关于我们界面',function(){
        cy.visit('http://192.168.10.112/cui/about')
    })
    it('平台介绍',function(){
        cy.get(about_us.INTRODUCTION).should('have.text','平台介绍')
    })
    it('通知公告',function(){
        cy.get(about_us.notice).click()
        cy.get(about_us.notice_first).click()
        cy.get(about_us.notice_first_back).click()
        cy.get(about_us.notice_first).should('exist')
    })
    it.only('联系方式',{retries: {runMode: 2, openMode: 1}},function(){
        cy.get(about_us.contact_information).click()
        cy.wait(3000)
        cy.get(about_us.query_input).type('成都')
        cy.get(about_us.query_btn).click()
    })
    it('管理员信箱（未登陆）',function(){
        cy.get(about_us.administrator_mailbox).click()
        cy.get(about_us.messageContent).type('giao')
        cy.get(about_us.commit_btn).click()
        cy.url().should('eql','http://192.168.10.112/cui/login')
    })
    it('常见问题',function(){
        cy.get(about_us.common_problem).click()
        cy.get(about_us.common_problem_1).should('have.text','如何注册个人账号？')

    })

})
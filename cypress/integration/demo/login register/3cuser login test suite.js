import {loginuser} from '../../../fixtures/login&resister/login_location'



describe('互联网端登录测试用例集',function(){
    it('企业用户登录',function(){
        cy.companylogin('915118037334193359','18296000766','admin@123')
        cy.get('.word___284OY').should('have.text','金融信用信息综合服务平台')

    
    })
    it.only('个人消费者登录',function(){
        cy.userlogin('18110002890','admin@123')
        cy.get(loginuser.personal).trigger('mouseover')
        cy.get(loginuser.personal_self).click()
        cy.get(loginuser.consumer_text).should('have.text','个人消费者认证通过')
    })
    it('个人经营者登录',function(){
        cy.userlogin('17380006333','admin@123')
        cy.get(loginuser.personal).trigger('mouseover')
        cy.get(loginuser.personal_self).click()
        cy.get(loginuser.consumer_text).should('have.text','个人经营者认证通过')
    })
    it('密码错误',function(){
        cy.userlogin('17380006333','admin@13')
        cy.get(loginuser.messagenotice).should('have.text','登录失败：用户名或密码错误')
    })

})
import {loginbank} from '../../../fixtures/login&resister/login_location'

describe('银政端登录测试用例集',function(){
    it('正确的用户名及密码',function(){
        cy.banklogin('psbc_sns_admin','admin@123')
        cy.get(loginbank.loginuser).should('have.text','psbc_sns_admin')
    })

    it('错误的密码',function(){
        cy.banklogin('psbc_sns_admin','admin@13')
        cy.get(loginbank.messagenotice).should('contain','用户名或密码错误')
    })

    it('未注册的用户进行登录',function(){
        cy.banklogin('123456','admin@13')
        cy.get(loginbank.messagenotice).should('contain','登录失败，该用户未注册')
    })
})
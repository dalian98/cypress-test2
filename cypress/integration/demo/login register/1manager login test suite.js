import {loginadmin} from '../../../fixtures/login&resister/login_location'//引入登录界面定位信息

console.log(loginadmin);
describe('管理端登录测试用例集',function(){
    
    var testdatas = ["aaaaa","bbbbb"]//未注册账号登录数据
    beforeEach(() =>{
        cy.visit('/ui/#/login')//管理员登录界面
    })
    it('正确的用户名密码',function(){
        cy.get(loginadmin.username).type('pbc_scs_admin')
        cy.get(loginadmin.password).type('admin@123')
        cy.get(loginadmin.loginbtn).click()
        cy.get(loginadmin.imageclick).click()
        cy.get(loginadmin.loginuser).should('have.text','pbc_scs_admin')
    })
    it('错误的密码',function(){
        cy.get(loginadmin.username).type('pbc_scs_admin')
        cy.get(loginadmin.password).type('admin@12')
        cy.get(loginadmin.loginbtn).click()
        cy.get(loginadmin.imageclick).click()
        cy.get(loginadmin.messagenotice).should('contain','用户名或密码错误')
    })
    it('不存在的用户',function(){
        cy.get(loginadmin.username).type('pbc_scs_admin111')
        cy.get(loginadmin.password).type('admin@12')
        cy.get(loginadmin.loginbtn).click()
        cy.get(loginadmin.imageclick).click()
        cy.get(loginadmin.messagenotice).should('contain','登录失败，该用户未注册')
    })
    it('用户名或密码为空',function(){
        cy.get(loginadmin.username).type('pbc_scs_admin111')
        cy.get(loginadmin.password).type('admin@12')
        cy.get(loginadmin.loginbtn).click()
        cy.get(loginadmin.imageclick).click()
        cy.get(loginadmin.messagenotice).should('contain','登录失败，该用户未注册')
    })
    //不同数据代入执行的测试，testdatas中有条数据就执行几次用例
    testdatas.forEach((event) => {
        it("不符规格的账号", function () {
            cy.get(loginadmin.username).type(event)
            cy.get(loginadmin.password).type('admin@123')
            cy.get(loginadmin.loginbtn).click()
            cy.get(loginadmin.imageclick).click()
            cy.get(loginadmin.messagenotice).should('contain','登录失败，该用户未注册')
         })
    })
})
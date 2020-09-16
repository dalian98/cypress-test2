import {organizational} from '../../../fixtures/manage_ui_location/organizational_management'
describe('人行机构设置搜索功能测试用例集',function(){
    beforeEach('进入人行机构设置界面',()=>{
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(organizational.bank_setting).click()
        cy.get(organizational.pepole_setting).click()
    })
    it('按机构地址查询',function(){
        cy.get(organizational.adress).click()
        cy.get(organizational.suiningshi).click()
        cy.get(organizational.chuanshanqu).click()
        cy.get(organizational.query_btn).click()
        cy.get(organizational.resulet).should('have.text','A1000151000269')
    })
    it('按机构级别查询', () => {
        cy.get(organizational.level).click()
        cy.get(organizational.level3).click({force:true})
        cy.get(organizational.query_btn).click()
        cy.get(organizational.resulet).should('have.text','A1000151000016')
    })
    it('按机构名称查询', () => {
        cy.get(organizational.name).type('中国人民银行井研县支行')
        cy.get(organizational.query_btn).click()
        cy.get(organizational.resulet).should('have.text','A1000151000016')
    })
    // it.only('添加机构', () => {
    //     cy.get(add.add_btn).click()
    //     cy.get(add.superior_ture).click()
    //     cy.get(add.superior_false).click()

    // });
}) 
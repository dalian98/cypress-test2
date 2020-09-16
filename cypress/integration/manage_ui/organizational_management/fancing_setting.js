import {organizational,fancing} from '../../../fixtures/manage_ui_location/organizational_management'
describe('金融机构设置搜索测试用例集',function(){
    beforeEach('进入金融机构设置界面',function(){
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(organizational.bank_setting).click()
        cy.get(fancing.fancing_setting).click()
    })
    it.only('按机构地址查询',function(){
        cy.get(fancing.adress1).click()
        cy.get(fancing.suiningshi).click()
        cy.get(fancing.chuanshanqu).click()
        cy.get(fancing.query_btn).click()
        cy.get(fancing.result1).should('have.text','C1080051000013')
    })
    it('按机构级别查询', () => {
        cy.get(fancing.level).click()
        cy.get(fancing.level3).click({force:true})
        cy.get(fancing.query_btn).click()
        cy.get(fancing.result1).should('have.text','C1078851000512')
    })
    it('按类别查询', () => {
        cy.get(fancing.leibie).click()
        cy.get(fancing.leibie1).click()
        cy.get(fancing.leibie1_1).click()
        cy.get(fancing.leibie1_1_1).click()
        cy.get(fancing.query_btn).click()
        cy.get(fancing.result1).should('have.text','C1010251000016')//中国工商银行股份有限公司四川省分行
    })
    it('按机构名称进行查询', () => {
        cy.get(fancing.organization_input).type('广元市朝天国信小额贷款有限公司')
        cy.get(fancing.query_btn).click()
        cy.get(fancing.result1).should('have.text','Z1476851000012')
    })
})
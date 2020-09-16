import {organizational,government} from '../../../fixtures/manage_ui_location/organizational_management'

describe('政府机构设置搜索用例集',function(){
    beforeEach('进入政府机构设置界面',function(){
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(organizational.bank_setting).click()
        cy.get(government.government_setting).click()
    })
    it('按机构等级搜索',function(){
        cy.get(government.organization_level).click()
        cy.get(government.organization_level1).click({force:true})
        cy.get(government.query_btn).click()
        cy.get(government.result).should('have.text','91110113610900938Q')
    })
    it('按机构名称搜索', () => {
        cy.get(government.organization_input).type('腾讯级测试机构')
        cy.get(government.query_btn).click()
        cy.get(government.result).should('have.text','91110113610900938Q')
    });
    it.only('按统一社会信用码搜索', () => {
        cy.get(government.code_input).type('91110113610900938Q')
        cy.get(government.query_btn).click()
        cy.get(government.result).should('have.text','91110113610900938Q')
    });
})
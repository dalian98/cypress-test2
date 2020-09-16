import {organizational,enterprise} from '../../../fixtures/manage_ui_location/organizational_management'

describe('政府机构设置搜索用例集',function(){
    beforeEach('进入政府机构设置界面',function(){
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(organizational.bank_setting).click()
        cy.get(enterprise.enterpriset_setting).click()
    })
    it('按机构等级搜索',function(){
        cy.get(enterprise.organization_level).click()
        cy.get(enterprise.organization_level1).click({force:true})
        cy.get(enterprise.query_btn).click()
        cy.get(enterprise.result).should('have.text','915118002109008160')
    })
    it('按机构名称搜索', () => {
        cy.get(enterprise.organization_input).type('四川公诚信资产评估有限公司')
        cy.get(enterprise.query_btn).click()
        cy.get(enterprise.result).should('have.text','91510000689914696F')
    });
    it('按统一社会信用码搜索', () => {
        cy.get(enterprise.code_input).type('91510000689914696F')
        cy.get(enterprise.query_btn).click()
        cy.get(enterprise.result).should('have.text','91510000689914696F')
    });
})
import { normal_location } from '../../fixtures/financial_application_location/normal_location'
import {getMoble} from '../demo/login&register/生成随机电话号码'

const iouNo1 = getMoble()
const iouNo2 = getMoble()

describe('普通融资流程',function(){
    it('normal',function(){
        cy.companylogin('915101006771521538','17708030003','admin@123')
        cy.get(normal_location.financial_service).click()
        cy.wait(3000)
        cy.get(normal_location.search_input).type('澳新无贷前')
        cy.get(normal_location.search).click()
        cy.wait(2000)
        cy.get(normal_location.target_product_detail_button)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'href', '/cui/financing/productDetail?id=3251')
        cy.visit('http://192.168.10.112/cui/financing/productDetail?id=3251')
        cy.get(normal_location.protocal_agreement).click()
        cy.get(normal_location.apply_button).click()
        cy.get(normal_location.expected_amount).type('123')
        cy.get(normal_location.confirm_button).click()
        cy.url().should('eql','http://192.168.10.112/cui/success/apply')
        // cy.get('.ant-dropdown-trigger').trigger('mouseover')
        // cy.get(':nth-child(4) > a > :nth-child(2)').click()

    })
    it('normal_institution',function(){
        //登录到融资处理页面
        cy.banklogin('qxb_scs_admin','admin@123')
        cy.get(normal_location.menu_financial_service).click()
        cy.get(normal_location.menu_product_financing_assign).click()
        //指派
        cy.get(normal_location.search_by_name).type('腾讯科技（成都）有限公司')
        cy.get(normal_location.search_by_date).click()
        cy.get(normal_location.set_date_today).click()
        cy.get(normal_location.set_date_today).click()
        cy.get(normal_location.search_button).click()
        cy.wait(3000)
        cy.get(normal_location.assign_button).click()
        cy.get(assignee_selector).click()
        cy.get(local_institution).click()
        cy.get(oneself).click()
        cy.get(confirm_assign).click()
        cy.get('.ant-row-flex > :nth-child(1) > .ant-btn').click()
        // 待受理
        cy.get(':nth-child(7) > a').click()
        cy.get('.ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('#applicantName').type('腾讯科技（成都）有限公司')
        cy.get('[style="margin-left: -8px; margin-right: -8px;"] > .ant-col-24 > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get(':nth-child(9) > :nth-child(3)').click()
        // 受理中
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #applicantName').type('腾讯科技（成都）有限公司')
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > .ant-col-24 > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-body > table > .ant-table-tbody > .ant-table-row > :nth-child(9) > :nth-child(5) > span > a').click()
        cy.get('#creditQuota').type('123')
        cy.get('#stableJobCommitment > :nth-child(2) > :nth-child(2)').click()
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.wait(3000)
        // 已授信
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').click()
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #applicantName').type('腾讯科技（成都）有限公司')
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > .ant-col-24 > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get(':nth-child(10) > :nth-child(3) > span > a').click()
        cy.get('.ant-collapse-header').click()
        cy.get('#rate').type('3.125')
        cy.get('#guaranteeModes > :nth-child(1) > :nth-child(2)').click()
        cy.get('#guaranteeModes > :nth-child(2) > :nth-child(2)').click()
        cy.get('#iouNo').type(iouNo1)
        cy.get('#loanMoney').type('120')
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('[title="2020年9月13日"] > .ant-calendar-date').click()
        cy.get('#monetaryPolicyInstruments > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        cy.get('#commonLoanUsage > .ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        cy.get('#employees').type('1')
        cy.get('#operatingIncome').type('1')
        cy.get('#totalAssets').type('1')
        cy.get('#loansType > :nth-child(2) > :nth-child(2)').click()
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.wait(3000)
        // 已签约
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)').click()
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #applicantName').type('腾讯科技（成都）有限公司')
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('.ant-tabs-tabpane-active > [style="margin-left: -8px; margin-right: -8px;"] > .ant-col-24 > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get('.ant-table-tbody>:nth-child(1)>:nth-child(11) > :nth-child(3) > span > a').click()
        cy.get(':nth-child(1) > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-row-flex > .ant-col > .ant-btn').click()
        cy.get('#creditQuota').clear()
        cy.get('#creditQuota').type('122')
        cy.get('#firstLoan > :nth-child(2) > :nth-child(2)').click()
        cy.get(':nth-child(1) > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get('.ant-collapse-extra > .ant-row-flex > .ant-col > .ant-btn').click()
        cy.get('#rate').clear()
        cy.get('#rate').type('3.25')
        cy.get('#guaranteeModes > :nth-child(1) > :nth-child(2)').click()
        cy.get('#guaranteeModes > :nth-child(3) > :nth-child(2)').click()
        cy.get('#loanMoney').clear()
        cy.get('#loanMoney').type('121')
        cy.get('#monetaryPolicyInstruments > .ant-select-selection').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(7)').click()
        cy.get('.ant-collapse-extra > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.wait(3000)
        cy.get('.loan_info_item___3BTBz > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > #rate').type('5')
        cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #guaranteeModes > :nth-child(2) > :nth-child(2)').click()
        cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #iouNo').type(iouNo2)
        cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > #loanMoney').type('1')
        cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input').click()
        cy.get('.ant-calendar-today > .ant-calendar-date').click()
        cy.get('[title="2020年9月13日"] > .ant-calendar-date').click()
        cy.get('.ant-collapse-item-active > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(6) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #monetaryPolicyInstruments > .ant-select-selection').click()
        //cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/div/div/ul/li[5]').click()
        //cy.get('.ant-collapse-item-active > .ant-collapse-content > .ant-collapse-content-box > .ant-row-flex > :nth-child(7) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #commonLoanUsage > .ant-select-selection > .ant-select-selection__rendered').click()
        //cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div/div[3]/div/div/div/ul/li[3]').click()
        cy.get('.ant-collapse-item-active > .ant-collapse-header > .ant-collapse-extra > .ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.get('.ant-modal-close-x').click()
    })
})
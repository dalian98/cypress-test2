

describe('财经互动-测试用例集',function(){
    it('查询遂宁市船山区2018年度数据',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get('.ant-cascader-picker-label').click()
        cy.get('.ant-cascader-menu-item-expand').click()
        cy.get('[title="船山区"]').click()
        cy.get('#year > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
        cy.get(':nth-child(2) > .ant-btn').click()
        cy.get('[title="四川*****设备制造有限公司"]').should('exist')
    })
    it('查询遂宁市船山区2019年度数据',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get('.ant-cascader-picker-label').click()
        cy.get('.ant-cascader-menu-item-expand').click()
        cy.get('[title="船山区"]').click()
        cy.get('#year > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
        cy.get(':nth-child(2) > .ant-btn').click()
        cy.get('[title="四川*****询有限公司"]').should('exist')
    })
    it.only('查询后重置',function(){
        cy.visit('http://192.168.10.112/cui/financialInteraction')
        cy.get('.ant-cascader-picker-label').click()
        cy.get('.ant-cascader-menu-item-expand').click()
        cy.get('[title="船山区"]').click()
        cy.get('#year > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
        cy.get(':nth-child(2) > .ant-btn').click()
        cy.get('[title="四川*****询有限公司"]').should('exist')
        cy.get('[style="padding: 0px 20px;"] > :nth-child(3) > .ant-btn').click()
        cy.get('[title="永红*****"]').should('exist')

    })
    
})
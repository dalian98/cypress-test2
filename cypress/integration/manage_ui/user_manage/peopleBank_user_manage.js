describe('人行机构用户设置用例集',function(){
    beforeEach('进入人行机构用户设置界面',function(){
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(':nth-child(4) > .ant-menu-submenu-title > :nth-child(1) > span').click()
        cy.get('.ant-menu-submenu>:nth-child(2)>:nth-child(1)>a').click()
    })
    
    it('按机构名称/用户/搜索用户',function(){
        cy.get('.ant-select-search__field__wrap > .ant-input').type('中国人民银行成都分行')
        cy.get('#userName').type('宋giao')
        cy.get('.ant-row-flex > :nth-child(1) > .ant-btn').click()
        cy.get(':nth-child(2)>:nth-child(1)>p').should('have.text','宋giao')
    })
})
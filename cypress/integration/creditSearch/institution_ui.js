describe('银政端信用查询',function(){
    it('institution_ui',function(){
        cy.banklogin('qxb_scs_admin','admin@123')
        cy.get(':nth-child(4) > .ant-menu-submenu-title').click()
        cy.get('.ant-menu-submenu > :nth-child(2) > :nth-child(1) > a').click()
        
    })
})
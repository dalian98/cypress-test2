describe('银政端登录',function(){
    it('insLogin',function(){
        cy.banklogin('qxb_scs_admin','admin@123')
    })
})
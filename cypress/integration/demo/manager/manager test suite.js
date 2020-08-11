describe('管理员测试用例集',function(){
    beforeEach(()=>{
        cy.adminlogin('pbc_sns_ejadmin','SELECT 1 + 1 AS solution')
    })
    it('无题',function(){
        cy.visit('/org/institutionSet')//进入人行机构设置界面
        cy.get('.ant-select-search__field__wrap > .ant-input').type('机构名称')
        cy.get('.ant-row-flex > :nth-child(1) > .ant-btn').click()
    })
})
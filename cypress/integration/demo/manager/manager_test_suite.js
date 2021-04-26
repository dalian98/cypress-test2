describe('管理员测试用例集',function(){
    beforeEach(()=>{
        cy.exec(' python C:\\Users\\songyao\\Desktop\\cypress-test2\\cypress\\fixtures\\DBclear\\dbclear.py')
    })
    it('无题',function(){
        cy.visit('/cui/login')//进入人行机构设置界面
        cy.get('.ant-select-search__field__wrap > .ant-input').type('机构名称')
        cy.get('.ant-row-flex > :nth-child(1) > .ant-btn').click()
    })
})
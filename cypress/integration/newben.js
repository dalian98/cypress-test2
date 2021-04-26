describe('newben检查',function(){
    it('登录newben',function(){
        cy.visit('http://prod.ghostcloud.cn:10017/user/login');
        cy.get('#userName').type('admin')
        cy.get('#password').type('password')
        cy.get('.ant-btn > span').click()
        cy.get('.name___WfKAK').should('have.text','admin')
        //进入我的应用查看应用状态
        cy.get(':nth-child(2) > .ant-menu-submenu-title > :nth-child(1) > :nth-child(2)').click()
        cy.get('.ant-layout-sider-children>:nth-child(2) > :nth-child(2) > :nth-child(2)>:nth-child(1)').click()

        //五个应用状态running
        cy.get('#root > div > section > section > div > main > div > div > div > section > section > div > main > div > div.ant-pro-grid-content > div > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4)')
        .should('have.text','running')
        cy.get('#root > div > section > section > div > main > div > div > div > section > section > div > main > div > div.ant-pro-grid-content > div > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4)')
        .should('have.text','running')
        cy.get('#root > div > section > section > div > main > div > div > div > section > section > div > main > div > div.ant-pro-grid-content > div > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(4)')
        .should('have.text','running')
        cy.get('#root > div > section > section > div > main > div > div > div > section > section > div > main > div > div.ant-pro-grid-content > div > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(4)')
        .should('have.text','running')
        cy.get('#root > div > section > section > div > main > div > div > div > section > section > div > main > div > div.ant-pro-grid-content > div > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(4)')
        .should('have.text','running')

        //进入应用矩阵界面
        cy.get('.ant-layout-sider-children>:nth-child(2) > :nth-child(2) > :nth-child(2)>:nth-child(2)').click()
        //两个应用的状态running
        cy.get('.ant-table-content>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(2)')
        .should('have.text','running')
        cy.get('.ant-table-content>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(2)')
        .should('have.text','running')

    })
    it.only('courier', function(){
        cy.visit('http://10.0.1.17:12366/ui')
        cy.get('#userName').type('admin')
        cy.get('#password').type('password')
        cy.get('.ant-btn > span').click()
        cy.get('.ant-pagination-total-text').should('have.text','共 22 条')
        cy.get('.ant-menu>:nth-child(2)>:nth-child(1)>:nth-child(1)').click({force:true})
        cy.get('.ant-table-content>table>tbody>:nth-child(1)>:nth-child(4)>a').click()
        cy.get('.ant-menu>:nth-child(2)>:nth-child(1)>:nth-child(1)').click({force:true})
        cy.get('.ant-table-content>table>tbody>:nth-child(2)>:nth-child(4)>a').click()

        
    });
})
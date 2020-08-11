describe('金融培育的冒烟测试',function(){
    // beforeAll('清理测试环境新增的数据',function(){
    //   cy.exec('python cypress\fixtures\dbclear.py')//调用python清理金融培育的新增的数据，清空测试环境
    // })
       
    it('创建培育任务',function(){
        //管理员登录
        cy.adminlogin('pbc_sns_ejadmin','admin@123')
        //进入金融培育界面
        cy.visit('http://192.168.10.110/ui/#/financialBreed/breedTask')
        //点击新建计划任务
        cy.contains('新建计划任务').click()
        //输入任务名称
        cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/span/span/input')
          .type('新增测试')
        //选择任务类型
        cy.get('#taskTag > div > div > div.ant-select-selection__placeholder').click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        //全选参与机构
        cy.get('[type="checkbox"]').first().check()
        //输入备注信息
        cy.get('#remark').type('新增测试')
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    })
    it('导入培育名单',function(){
        //管理员登录
        cy.adminlogin('pbc_sns_ejadmin','admin@123')
        //进入金融培育界面
        cy.visit('http://192.168.10.110/ui/#/financialBreed/breedTask')
        //点击导入名单按钮
        cy.get('#root > section > section > main > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > span:nth-child(5) > span > button')
          .click()
        //设置本地上传文件
        const filepath = '培育企业名单 (1).xlsx'
        //上传文件
        cy.get('body > div:nth-child(4) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.ant-row > span > div.ant-upload.ant-upload-drag > span > input[type=file]')
          .attachFile(filepath)
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.get('.ant-message-custom-content').should('exist')
        
    })
    it('分配培育任务',function(){
        //二级管理员登录
        cy.adminlogin('pbc_sns_ejadmin','admin@123')
        //进入金融培育界面
        cy.visit('http://192.168.10.110/ui/#/financialBreed/breedTask')
        //点击分派按钮
        cy.get('#root > section > section > main > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active.tabPane___1V8xr > div:nth-child(2) > div > div > div:nth-child(2) > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > a')
          .click()
        cy.get('.ant-table-body-inner > .ant-table-fixed > .ant-table-tbody > .ant-table-row > td > :nth-child(9) > :nth-child(1) > .ant-btn')
          .click()
        cy.get('#mainOrgId > div > div').click()
        //主办机构选择
        cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
        cy.get('#auxiliaryOrgId > div > div').click()
        //辅培机构选择
        cy.get('.ant-select-dropdown-menu-item-active').click()
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        

    })
    it('主办机构指派培育任务给自己',function(){
        //主办机构银行登录
        cy.banklogin('psbc_sns_admin','admin@123')
        //进入培育任务指派界面
        cy.visit('http://192.168.10.111/istui/#/financingBreed/taskAssign')
        //点击指派按钮
        cy.get('#root > section > section > main > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(3) > div.ant-table-wrapper > div > div > div > div > div.ant-table-fixed-right > div > div > table > tbody > tr:nth-child(1) > td > span:nth-child(5) > span > a')
          .click()
        //选择当前登录用户
        cy.get('#assignId').click()
        cy.get('.ant-cascader-menu-item').click()
        cy.get('[title="psbc_sns_admin（杨**）"]').click()
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        //进入培育任务办理界面
        cy.visit('http://192.168.10.111/istui/#/financingBreed/taskHandle')
        //点击开始培育按钮
        /cy.get('#root > section > section > main > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(3) > div.ant-table-wrapper > div > div > div > div > div.ant-table-fixed-right > div > div > table > tbody > tr > td > a:nth-child(5)')
          .click()
        //切换到培育中界面
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()


    })
    it('对接情况选择是',function(){
        //主办机构银行登录
        cy.banklogin('psbc_sns_admin','admin@123')
        //进入培育任务办理界面
        cy.visit('http://192.168.10.111/istui/#/financingBreed/taskHandle')
        //切换到培育中界面
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()
        //点击对接情况
        cy.get('#root > section > section > main > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(3) > div.ant-table-wrapper > div > div > div > div > div.ant-table-fixed-right > div > div > table > tbody > tr:nth-child(1) > td > span:nth-child(11) > span > a')
          .click()
        //选择是否符合信贷标准“是”
        cy.get('#creditStandard > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
          .click()
        cy.get('.ant-select-dropdown-menu-item-active').click()
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        
     })


     it('点击线上融资填写融资内容',function(){
       //主办机构银行登录
       cy.banklogin('psbc_sns_admin','admin@123')
       //进入培育任务办理界面
       cy.visit('http://192.168.10.111/istui/#/financingBreed/taskHandle')
       //切换到培育中界面
       cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click()
       //点击线上融资
        cy.get('.ant-table-body-inner > .ant-table-fixed > .ant-table-tbody > :nth-child(1) > td > :nth-child(7) > span > a')
          .click()
        //填写线上融资界面内容,选择客户贷款产品
        cy.get('#productId > div > div > ul > li > div > input')
          .click()
        cy.get('.ant-select-dropdown-menu-item-active')
          .click()
        //填写线上融资界面内容,选择业务办理人员
        cy.get('#productHandlerId > div > div > ul > li > div > input')
          .click()
        cy.get('.ant-select-dropdown-menu-item-active')
          .click()
        //输入期望融资金额“123”万元
        cy.get('#expectAmount').type('123')
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
     })
     it('产品融资办理-受理-授信',function(){
        //主办机构银行登录
        cy.banklogin('psbc_sns_admin','admin@123')
        //进入产品融资办理界面
        cy.visit('http://192.168.10.111/istui/#/financing/businessHandle')
        //点击受理
        cy.get('#root > section > section > main > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(3) > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(9) > a:nth-child(3)')
          .click()
        //进入受理中界面
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)')
          .click()
        //点击授信
        cy.get('#root > section > section > main > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div:nth-child(2) > div > div > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(3) > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr.ant-table-row.light___3jza5.ant-table-row-level-0 > td:nth-child(9) > span:nth-child(5) > span > a')
          .click()
        //输入授信额度
        cy.get('#creditQuota').type('123')
        //点击确定按钮
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()


     })
     it.only('产品融资办理-签约',function(){
        //主办机构银行登录
        cy.banklogin('psbc_sns_admin','admin@123')
        //进入产品融资办理界面
        cy.visit('http://192.168.10.111/istui/#/financing/businessHandle')
        //进入已授信界面
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').click()
        //点击签约按钮
        cy.get(':nth-child(3) > span > a').should('have.text','签约')
          .click()
        //填写签约信息
        cy.get('.ant-collapse-header').click()
        cy.get('#rate').type('5')
        cy.get('#iouNo').type('合同号123456')
        cy.get('#loanMoney').type('123')
          document.getElementBy("train_date").removeAttribute("readonly")
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input > [placeholder="开始日期"]')
          
          .type('2020-07-08',{readonly: false})
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > #date > .ant-calendar-picker-input > [placeholder="结束日期"]')
          .type('2020-07-08',{force: true})

      })
})
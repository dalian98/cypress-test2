describe('测试用例集名称',function(){
  beforeEach('登录',function(){
    cy.request({
      method: 'post',
      url: 'http://prod.ghostcloud.cn:10017/webserver/apis/login',
      headers: { 'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6', },
      body:{"username":"admin","password":"password"}
    });
  })
  it('http://prod.ghostcloud.cn:10017/dashboard', () => {
    cy.visit('http://prod.ghostcloud.cn:10017/dashboard')
  });
})
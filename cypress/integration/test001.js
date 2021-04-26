describe('线上管理端冒烟',function(){
let token
	it('接口登录', () => {
		cy.request({
			url:'http://192.168.10.110/xrtong/user/login',
			method:'post',
			body:{
				"userType":1,
				"phone":"13508795427",
				"username":"pbc_scs_admin",
				"password":"admin@123",
				"pid":"65108e9f-be83-467f-9b16-7fcfffc42139",
				"code":0,
				"regionCode":"510000"
			}
		})
		.then((resp)=>{
			expect(resp.status).to.eq(200)
			console.log(resp.body)
			token = resp.body.data.token
			console.log(token)
		})
	})
})
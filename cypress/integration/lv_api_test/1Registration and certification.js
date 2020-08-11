import {path,register_body,apply_body,url} from './lv_api_test_data/1Registration and certification data'

// const url='http://192.168.168.110/xrtong'
// const url='http://10.0.1.154'
console.log(url)
describe('绿蓉融注册业务流程',function(){
    it('绿蓉融注册企业用户',function(){
        cy.request({
            url:url+path.register,
            method:'post',
            body:register_body.body1
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })

    it('绿蓉融已注册企业用户再次注册',function(){
        cy.request({
            url:url+path.register,
            method:'post',
            body:register_body.body1
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: null, msg: "此账号已经被注册", code: "400", data: null})
        })
    })

    it('绿蓉融企业认证',function(){
        cy.request({
            url:url+path.apply,
            method:'post',
            body:apply_body.body1
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })

    it('绿蓉融注册个人用户',function(){
        cy.request({
            url:url+path.register,
            method:'post',
            body:register_body.body2
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })

    it('绿蓉融已注册个人用户再注册',function(){
        cy.request({
            url:url+path.register,
            method:'post',
            body:register_body.body2
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: null, msg: "此账号已经被注册", code: "400", data: null})
        })
    })

    it('绿蓉融个人认证',function(){
        cy.request({
            url:url+path.update,
            method:'put',
            body:apply_body.body2
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })

    it('绿蓉融注册个人经营者用户',function(){
        cy.request({
            url:url+path.register,
            method:'post',
            body:register_body.body3
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })
    it('绿蓉融个人经营者认证',function(){
        cy.request({
            url:url+path.updateUserEnterprise,
            method:'put',
            body:apply_body.body3
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })

})
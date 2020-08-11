import {url,path} from './lv_api_test_data/1Registration and certification data'
import {lvApply_body} from './lv_api_test_data/2Apply for green products data'

//认证通过的企业申请
// 申请成功后再次申请
//申请成功后银政端处理
//取消申请
// 审核中的企业申请
let params//全局变量,获取用户申请的产品自增id

describe('绿色产品申请流程',function(){
    it('认证通过的企业申请',function(){
        cy.request({
            url:url+path.lvApply,
            method:'post',
            body:lvApply_body.body1
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            // expect(resp.body).to.eql()
        })
    })
    it('申请成功过后再次申请',function(){
        cy.request({
            url:url+path.lvApply,
            method:'post',
            body:lvApply_body.body1
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: null, msg: "申请失败，您申请的产品还没有处理完成", code: "400", data: null})
        })
    })
    it('企业用户查询申请进度并且获取绿色产品的id',function(){
        cy.request({
            url:url+path.listMyApplication+lvApply_body.get1_0,
            method:'get'
        }).then((resp)=>{
            console.log(resp.body)
            console.log(resp.body.data[0].application.id)
            params = resp.body.data[0].application.id//取出申请产品的自增id，并定义全局变量
            expect(resp.status).to.eq(200)
            //expect()需要增加
            expect(resp.body).to.contains({success: true,code: "200",msg: "OK"})
        })
          
            // expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        
    })
    it('企业用户取消申请',function(){
        cy.request({
            url:url+path.lvCancel,
            method:'put',
            body:{
                "applicationId":params,
                "lvUserName":'174314197412245773',
                "lvUserPhone":'13780659874'
            }
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })
    
})
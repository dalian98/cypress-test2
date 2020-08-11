import {product_body} from './lv_api_test_data/3product_on_off_del data'
import {url,path} from './lv_api_test_data/1Registration and certification data'
let token,token1,ids

describe('绿蓉融产品发布下架删除',function(){
    it('获取银政端token',function(){
        cy.request({
            url:'http://192.168.168.110/xrtong/user/login',
            method:'post',
            body:{
                "userType":1,
                "phone":"13508795427",
                "username":"bosn_scs_admin",
                "password":"admin@123",
                "pid":"8ba612ff-f802-4575-8281-5184e73de973",
                "code":0,
                "regionCode":"510000"}
        }).then((resp)=>{
            
            token = resp.body.data.token//获取token
        })
    })
    it('绿色产品添加',function(){
        cy.request({
            url:url+path.lvproductapply,
            headers:{'Authorization':token},
            method:'post',
            body:product_body.body_addproduct
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })
    it('获取申请中产品的ids',function(){
        cy.request({
            url:url+path.findCheckProduct,
            headers:{'Authorization':token},
            method:'post',
            body:{
                "pageNum":1,
                "pageSize":10,
                "loanUpperTerm":"",
                "guaranteeMode":"",
                "productName":"接口测试",
                "regionVo":{},
                "status":20}//待绿蓉融审核的列表
        }).then((resp)=>{
            ids = resp.body.data.items[0].id
            console.log(resp.body.data.items[0].id)
        })
    })
    it('绿蓉融审核发布的产品',function(){
        cy.request({
            url:url+path.changeStatus,
            method:'post',
            body:{
                "ids":[ids],
                "status":22,
                "accessType":2,
                "operatorName":"罗**"
            }
        }).then((resp)=>{
            console.log(resp.body)
            expect(resp.body).to.eql({success: true, msg: "OK", code: "200", data: null})
        })
    })
    it('银政端审核发布的产品',function(){
        cy.request({
            url:url+path.changeStatus,
            method:'post',
            headers:{'Authorization':token},
            body:{
                "ids":[ids],
                "status":3,
                "accessType":0
            }
        })
    })
    it('获取管理端token',function(){
        cy.request({
            url:'http://192.168.168.110/xrtong/user/login',
            method:'post',
            body:{
                "userType":1,
                "phone":"13508795427",
                "username":"pbc_sns_ejadmin",
                "password":"admin@123",
                "pid":"a98610d5-1c95-4eee-ede7-45b17ce52c56",
                "code":0,
                "regionCode":"510000"
            }
        }).then((resp)=>{
            
            token1 = resp.body.data.token//获取token
        })
    })
    it('绿蓉融管理端审核发布的产品',function(){
        cy.request({
            url:url+path.changeStatus,
            method:'post',
            headers:{'Authorization':token1},
            body:{
                "accessType":1,
                "status":5,
                "ids":[ids]}
        }).then((resp)=>{
            console.log(resp.body)
        })
    })
})
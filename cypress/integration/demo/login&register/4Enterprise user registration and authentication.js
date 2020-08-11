import {getMoble} from './生成随机电话号码'
import {getIdcard} from './生成随机身份证号'
import {register,page_apply} from '../../../fixtures/login&resister/register&certification_location'
import {Internet_user_manage} from '../../../fixtures/login&resister/manage_user_location'

const phone = getMoble()//整一个随机的电话号码给企业用
const idcard = getIdcard()//整一个随机的18位身份证号码
const phone1 = getMoble()//整一个随机的电话号码给个人用
console.log(phone,idcard)
describe('注册认证测试用例集',function(){
    
    it('注册企业账号',function(){
        cy.visit('http://192.168.10.112/cui/login/register')
        cy.get(register.code).type(idcard)
        cy.get(register.phone).type(phone)
        cy.get(register.smsCode).type('1111')
        cy.get(register.password).type('admin@123')
        cy.get(register.repeatPassword).type('admin@123')
        cy.get(register.agree).click()
        cy.get(register.registerbtn).click()     
    })
    it('注册企业账号进行企业认证',function(){
        cy.companylogin(idcard,phone,'admin@123')
        cy.get(page_apply.here).click()
        cy.waitFor(page_apply.data_perfection)
        cy.get(page_apply.data_perfection).click()
        cy.get(page_apply.name).type('自动化测试企业')
        cy.get(page_apply.type_click1).click()
        cy.get(page_apply.type_select2).click()
        cy.get(page_apply.register_money).type(123)
        cy.get(page_apply.register_time).click()
        cy.get(page_apply.register_today).click({force:true})
        cy.get(page_apply.long_term).click()
        cy.get(page_apply.register_address).click()
        cy.get(page_apply.re_address_cd).click()
        cy.get(page_apply.re_address_sxq).click()
        cy.get(page_apply.adress).type('注册地址')
        cy.get(page_apply.business_address).click()
        cy.xpath(page_apply.bu_address_cd).click()
        cy.xpath(page_apply.bu_address_sxq).click()
        cy.get(page_apply.bu_address).type('经营地址')
        cy.get(page_apply.business_scope).type('经营范围')
        cy.get(page_apply.industry).click()
        cy.get(page_apply.industry1).click()
        cy.get(page_apply.blank).click()
        cy.get(page_apply.employees).type(123456)
        cy.get(page_apply.operatingIncome).type(123456)
        cy.get(page_apply.totalAssets).type(123456)
        cy.get(page_apply.legalMan).type(123456)
        cy.get(page_apply.contactName).type(123456)
        cy.get(page_apply.contactPhone).type(123456)
        const filepath = 'yunduo.png'
        //上传图片
        cy.get(page_apply.image1).attachFile(filepath)
        cy.get(page_apply.image2).attachFile(filepath)
        cy.get(page_apply.image3).attachFile(filepath)
        cy.wait(5000)
        cy.get(page_apply.commit).click()
        cy.get(page_apply.message).should('have.text','提交成功')
        cy.get(page_apply.verify).should('contain.text','企业认证正在审核中请耐心等待')
    })
    it.skip('管理端审核通过企业认证',function(){
        cy.adminlogin('pbc_scs_admin','admin@123')
        cy.get(Internet_user_manage.user_manage).click()
        cy.get(Internet_user_manage.Internet_user).click()
        cy.get(Internet_user_manage.userName).type(idcard)
        cy.get(Internet_user_manage.query_btn).click()
        cy.wait(3000)
        cy.get(Internet_user_manage.adopt_btn).click()
        cy.get(Internet_user_manage.ok_btn).click()
        cy.get(Internet_user_manage.message_box).should('contain.text','认证通过')
        cy.companylogin(idcard,phone,'admin@123')


    })
    it('注册个人账号',function(){
        cy.visit('http://192.168.10.112/cui/login/register')
        cy.get(register.company).click()
        cy.get(register.person).click()
        cy.get(register.phone).type(phone1)
        cy.get(register.smsCode).type('1111')
        cy.get(register.password).type('admin@123')
        cy.get(register.repeatPassword).type('admin@123')
        cy.get(register.agree).click()
        cy.get(register.registerbtn).click()
          
    })
    it('个人账号认证',function(){
        cy.userlogin(phone1,'admin@123')
        cy.get(page_apply.here).click()
        cy.waitFor(page_apply.data_perfection)
        cy.get(page_apply.data_perfection).click()
    })

})
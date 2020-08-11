import {getMoble} from '../../demo/login&register/生成随机电话号码'
import {getIdcard} from '../../demo/login&register/生成随机身份证号'

export const url='http://192.168.168.110/xrtong'
//export const url='http://10.0.1.154'
export const phone = getMoble(),idcard = getIdcard()//整一个企业电话和18位身份的随机值
export const phone1 = getMoble()//整一个个人电话号码
export const phone2 = getMoble(),idcard1 = getIdcard()///整一个个人经营者电话,整一个个人经营者信用码

//绿蓉融接口地址
export const path = {
    register:'/publicUser/register',//注册
    update:'/publicUser/update',//个人消费者资料审核
    lvApply:'/app/financeApplication/lvApply',//融资产品申请接口
    listMyApplication:"/app/financeApplication/listMyApplication",//融资产品信息进度查询
    lvCancel:'/app/financeApplication/lvCancel',//融资产品取消申请接口
    lvAddProductAnswer:'',//贷前资料接口
    apply:'/app/center/apply',//企业资料审核接口
    updateUserEnterprise:'/publicUser/updateUserEnterprise',//个人经营者资料审核
    changeStatus:'/finance/changeStatus',//绿蓉融方面审核接口
    publishProduct:'/finance/publishProduct',//发布产品,需要token
    deleteProduct:'/finance/deleteProduct',// 删除产品
    operate:'/financeApplication/operate',//调用绿蓉融提供的咨询服务结果，将数据传递过去,需要token
    consultResult:'/financeApplication/consultResult',//绿蓉融回调该接口，将咨询服务结果返回
    lvproductapply:'/finance/publishProduct',//绿色产品添加
    findCheckProduct:'/finance/findCheckProduct',//查询待审核的产品
}

//注册传参
export const register_body = {
    //企业注册body
    body1:{
        "userType":3,
        "creditCode":idcard,
        "phone":phone,
        "platType":1,
        "password":"admin@123",
        "repeatPassword":"admin@123",
        "agree":true,
        "regionCode":510900
    },
    //个人注册body
    body2:{
        "userType":2,
        "phone":phone1,
        "platType":1,
        "password":"admin@123",
        "repeatPassword":"admin@123",
        "agree":true,
        "regionCode":510900
    },
    //个人经营者注册body
    body3:{
        "userType":2,
        "phone":phone2,
        "platType":1,
        "password":"admin@123",
        "repeatPassword":"admin@123",
        "agree":true,
        "regionCode":510900
    }

}
//认证传参
export const apply_body ={
    //企业认证body
    body1:{
    "businessLicense":"/file/raw/2020-07-21/1595317926563_身份证.jpg",
    "operatorHandheldIdCard":"/file/raw/2020-07-21/1595317930300_身份证.jpg",
    "operatorHandheldBusinessLicense":"/file/raw/2020-07-21/1595317934717_身份证.jpg",
    "creditCode":idcard,
    'phone':phone,
    "name":"绿蓉融"+phone,
    "enterpriseType":"有限责任公司",
    "registeredCapital":100,
    "registeredDate":"2016-07-07",
    "dateExpired":"2020-07-10",
    "address":"天府大道",
    "businessAddress":"天府大道",
    "bussinessScope":"全省",
    "employees":50,
    "operatingIncome":300,
    "totalAssets":45,
    "legalMan":"和国家",
    "contactName":"加大康",
    "contactPhone":phone,
    "cityId":510100,
    "areaId":510101,
    "businessCityId":510100,
    "businessAreaId":510101,
    "industryCategory":{"sectorCode":"A","sectorName":"农、林、牧、渔业","majorCode":"1","majorName":"农业","middleCode":"11","middleName":"谷物种植","minorCode":"111","minorName":"稻谷种植"},"idCardFront":"","idCardBack":"","operateType":1,"handheldIdCard":"","platType":1},
    //个人消费者认证传参body
    body2:{
    "idCardFront":"/file/raw/2020-07-21/1595323239568_身份证.jpg",
    "idCardBack":"/file/raw/2020-07-21/1595323243342_身份证.jpg",
    "handheldIdCard":"/file/raw/2020-07-21/1595323246553_身份证.jpg",
    "realName":"绿蓉融"+phone1,
    "idcardNo":"510101202007155513",
    "address":"1号大道",
    "cityId":510100,
    "areaId":510107,
    "enterpriseId":null,
    "platType":1,
    "phone":phone1
    },
    //个人消费者认证传参body
    body3:{
    "creditCode":idcard1,
    "idCardFront":"/file/raw/2020-07-21/1595323406451_身份证.jpg",
    "idCardBack":"/file/raw/2020-07-21/1595323409885_身份证.jpg",
    "operatorHandheldIdCard":"/file/raw/2020-07-21/1595323419225_身份证.jpg",
    "businessLicense":"/file/raw/2020-07-21/1595323422410_身份证.jpg",
    "operatorHandheldBusinessLicense":"/file/raw/2020-07-21/1595323425463_身份证.jpg",
    "name":"绿蓉融"+phone2,
    "enterpriseRegisterDate":"2016-07-06",
    "dateExpired":"2022-07-01",
    "address":"2号大道",
    "enterpriseType":"个人经营",
    "bussinessScope":"全省",
    "legalMan":"法人",
    "legalManIdCard":"510101201809031999",
    "cityId":510100,
    "areaId":510107,
    "industryCategory":{"sectorCode":"B","sectorName":"采矿业","majorCode":"7","majorName":"石油和天然气开采业","middleCode":"71","middleName":"石油开采","minorCode":"711","minorName":"陆地石油开采"},
    "operateType":1,
    "platType":1,
    "phone":phone2}

}

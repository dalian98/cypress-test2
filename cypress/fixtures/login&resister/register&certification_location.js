
//注册页面定位信息
export const register = {
    code:'#creditCode',//验证码输入框
    phone:'#phone',//手机号输入框
    smsCode:'#smsCode',//验证码输入框
    password:'#password',//密码输入框
    repeatPassword:'#repeatPassword',//确认密码输入框
    agree:'#agree',//协议勾选框
    registerbtn:'.ant-btn-lg',//注册按钮
    company:'.ant-select-selection-selected-value',//点击切换到个人注册
    person:'[aria-selected="false"]'//个人注册
} 
//企业资料填写界面
export const page_apply = {
    here :'.ant-row > a',//此处按钮
    data_perfection : '#root > div:nth-child(2) > section > main > div > div > div > div:nth-child(3) > div > div.ant-col.ant-col-18.ant-col-offset-8.msgBtn___xIUCG > button',//马上完善资料按钮
    name : '#name',//企业名称输入框
    type_click1 : '.ant-select-selection__rendered',//企业类型点击1
    type_select2 : '.ant-select-dropdown-menu-item-active',//企业类型选择2
    register_money : '#registeredCapital',//注册金额输入框
    register_time:'#registeredDate > div > .ant-calendar-picker-input',//注册时间输入框
    register_today:'.ant-calendar-today-btn ',//时间插件今天按钮
    long_term:'.ant-col-4 > .ant-btn',//长期按钮
    register_address:':nth-child(2) > :nth-child(1) > .ant-row > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label',//注册地址
    re_address_cd:'[title="成都市"]',//成都市
    re_address_sxq:'[title="市辖区"]',//市辖区
    adress:'#address',//注册地址输入框
    business_address:':nth-child(3) > .ant-row > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label',//经营地址
    bu_address_cd:'/html/body/div[5]/div/div/div/ul/li[1]',//经营地址成都市
    bu_address_sxq:'/html/body/div[5]/div/div/div/ul[2]/li[1]',//市辖区
    bu_address:'#businessAddress',//经营地址输入框
    business_scope:'#bussinessScope',//经营范围
    industry:':nth-child(4) > [style="padding-left: 8px; padding-right: 8px;"] > .ant-row > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label',//所属行业
    industry1:'[title="农、林、牧、渔业"]',
    blank:":nth-child(3) > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title",//空白
    employees:'#employees',//从业人员
    operatingIncome:'#operatingIncome',//营业收入
    totalAssets:'#totalAssets',//资产总额
    legalMan:'#legalMan',//法人姓名
    contactName:'#contactName',//经办人姓名
    contactPhone:'#contactPhone',//经办人电话
    image1:'#businessLicense',//营业执照扫描件
    image2:'#operatorHandheldIdCard',//经办人手持身份证照片
    image3:'#operatorHandheldBusinessLicense',//经办人手持营业执照照片
    commit:'[style="text-align: center;"] > .ant-btn-primary',//提交认证按钮
    message:'.ant-message-custom-content > span',//提示信息框
    verify:'.certification___2s5Gr > p'
} 
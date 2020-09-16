export const organizational = {
    bank_setting:'.ant-layout-sider-children > .ant-menu > :nth-child(2) > .ant-menu-submenu-title',//机构设置
    pepole_setting:'.ant-menu-submenu>:nth-child(2)>:nth-child(1)>a',//人行机构设置
    adress:'.ant-cascader-picker-label',//机构地址
    suiningshi:'[title="遂宁市"]',//机构地址选项遂宁市
    chuanshanqu:'[title="船山区"]',//机构地址选项遂宁市-船山区
    query_btn:'.ant-row-flex > :nth-child(1) > .ant-btn',//查询按钮
    resulet:'.ant-table-tbody >:nth-child(1)> :nth-child(2)',//查询结果机构码
    level:'.ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder',//机构级别
    level3:'[title="三级"]',//级别一级
    name:'.ant-select-search__field__wrap > .ant-input',//机构名称
    add_btn:':nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-btn',//添加机构按钮
}

export const fancing = {
    fancing_setting:'.ant-menu > :nth-child(2) > a',//金融机构设置
    adress1:':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label',//机构地址
    suiningshi:'[title="遂宁市"]',//机构地址选项遂宁市
    chuanshanqu:'[title="船山区"]',//机构地址选项遂宁市-船山区
    query_btn:'.ant-row-flex > :nth-child(1) > .ant-btn',//查询按钮
    result1:'.ant-table-tbody >:nth-child(1)>:nth-child(2)',//金融机构查询结果
    level:'.ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder',//机构级别
    level3:'[title="三级"]',//级别一级
    leibie:':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-cascader-picker > .ant-cascader-picker-label',//类别
    leibie1:'[title="银行业存款类金融机构"]',//银行业存款类金融机构
    leibie1_1:'[title="银行"]',//银行
    leibie1_1_1:'[title="中国工商银行"]',//中国工商银行
    organization_input:'.ant-select-search__field__wrap > .ant-input',//机构名称输入框
}
export const government = {
    government_setting:'.ant-menu > :nth-child(3) > a',//金融机构设置
    organization_level:'.ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder',//机构等级
    organization_level1:'[title="一级"]',//机构等级一级
    query_btn:'.ant-row-flex > :nth-child(1) > .ant-btn',//查询按钮
    result:'.ant-table-tbody >:nth-child(1)>:nth-child(2)',//统一社会信用代码查询结果
    organization_input:'.ant-select-search__field__wrap > .ant-input',//机构名称输入框
    code_input:'#creditCode',//统一社会信用码输入框
}
export const enterprise = {
    enterpriset_setting:'.ant-menu > :nth-child(4) > a',//金融机构设置
    organization_level:'.ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder',//机构等级
    organization_level1:'[title="分支机构"]',//机构等级一级
    query_btn:'.ant-row-flex > :nth-child(1) > .ant-btn',//查询按钮
    result:'.ant-table-tbody >:nth-child(1)>:nth-child(2)',//统一社会信用代码查询结果
    organization_input:'.ant-select-search__field__wrap > .ant-input',//机构名称输入框
    code_input:'#creditCode',//统一社会信用码输入框
}

export const add ={
    add_btn:':nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-btn',//添加机构按钮
    superior_ture:'#superior > :nth-child(1) > :nth-child(2)',//是有直属上级行
    superior_false:':nth-child(2) > .ant-radio',//否有直属上级行
    code:'#orgFinancialInstitutionCode',//机构编码
    orgName:'#orgName',//机构名称
    
}
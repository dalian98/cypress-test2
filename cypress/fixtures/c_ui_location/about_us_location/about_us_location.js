//关于我们界面元素定位信息
export const about_us ={
    INTRODUCTION:'.title___1U9Fw',//平台介绍标题
    notice:'.ant-radio-group > :nth-child(2) > :nth-child(2)',//通知公告
    notice_first:'[data-row-key="0"] > td > .list_itembox > .item_main___VNGxK',//第一条公告
    notice_first_back:'[style="margin-top: 40px;"] > :nth-child(1)',//返回到公告通知列表
    contact_information:'.ant-radio-group > :nth-child(3) > :nth-child(2)',//联系方式
    query_input:'.ant-input',//联系方式界面输入框
    query_btn:'.ant-input-group-addon > .ant-btn',//联系方式界面查询按钮
    administrator_mailbox:'.ant-radio-group > :nth-child(4) > :nth-child(2)',//管理员信箱
    messageContent:'#messageContent',//管理员信箱输入框
    commit_btn:'.ant-col-18 > .ant-btn',//管理员信息提交按钮
    common_problem:'.ant-radio-group > :nth-child(5) > :nth-child(2)',//常见问题
    common_problem_1:'.title___2ihOG',//如何注册个人账号？
}
//右侧固定导航栏定位信息
export const right_column ={
    financing:'.noleftborder___3tRe2 > p',//融资服务界面导航
    broadcasting_financing:'.fixedMenu___aN5jx > :nth-child(1) > img',//右侧固定栏-广播融资
    normal_question:':nth-child(2) > img',//右侧固定栏-常见问题
    notice:'.fixedMenu___aN5jx > :nth-child(3) > img',//右侧固定栏-通知公告
    phone:':nth-child(4) > img'//右侧固定栏-联系方式
}
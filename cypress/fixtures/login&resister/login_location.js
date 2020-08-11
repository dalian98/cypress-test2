//管理端登录界面定位
export const loginadmin = {
    username:'#username',//用户名输入框
    password :'#password',//密码输入框
    loginbtn :'.ant-btn' ,//登录按钮
    imageclick:'.slider___2xiOR',//验证图片点击
    messagenotice :'.ant-message-notice-content',//提示信息框
    loginuser : '.ant-menu-submenu-title > .headerRight___3Xuj6 > .userName___3tH-e > .ant-badge'//主页中登录用户名称
} 
//银政端登录界面定位
export const loginbank = {
    username:'#username',//用户名输入框
    password :'#password',//密码输入框
    loginbtn :'.ant-btn' ,//登录按钮
    imageclick:'.slider___2xiOR',//验证图片点击
    messagenotice :'.ant-message-notice-content',//提示信息框
    loginuser : '.ant-menu-submenu-title > .headerRight___3QuU1 > .userName___2Idwn > .ant-badge'//主页中登录用户名称
} 
//互联网端登录界面定位
export const loginuser = {
    username:'#username',//用户名输入框
    password :'#password',//密码输入框
    codeinput : '#accountNo',//信用码输入框
    phoneinput : '#phone',//手机输入框
    loginbtn :'[style="padding-top: 20px;"] > .ant-btn-primary' ,//登录按钮
    imageclick:'.slider___2xiOR',//验证图片点击
    messagenotice :'.ant-message-notice-content',//提示信息框
    personal:'.ant-dropdown-trigger',//个人中心入口
    personal_self :'.ant-dropdown-menu > :nth-child(1) > a',//个人中心选项
    consumer_text : '.certification___2s5Gr > p'
}
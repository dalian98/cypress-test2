
export const lvApply_body={
    //审核通过的企业传参body
    body1:{
        "id":"2907",//productName: "哈哈哈哈"
        "operateOrgId":301290,
        "expectedAmount":100,
        "filledDemand":false,
        "lvUserName":"174314197412245773",
        "lvUserPhone":"13780659874",
        "lvRegionCode":"510900"
    },
    //企业获取申请的绿色产品
    get1_0:'?lvUserName=174314197412245773&lvUserPhone=13780659874',
    //企业取消申请绿色产品
    body1_1:{
        "applicationId":"2079",//productName: "哈哈哈哈"
        "lvUserName":'174314197412245773',
        "lvUserPhone":'13780659874'
    },
    //审核通过的个人传参body
    body2:{
        "id":"2911",//productName: "1111"
        "operateOrgId":301290,
        "expectedAmount":100,
        "filledDemand":false,
        "lvUserName":"13843799873",
        "lvRegionCode":"510900"
    },
    //审核未通过的企业传参body
    body3:{
        "id":"3221",
        "operateOrgId":301290,
        "expectedAmount":100,
        "filledDemand":false,
        "lvUserName":"653836201902284546",
        "lvUserPhone":"18961908461",
        "lvRegionCode":"510900"
    },
    //审核未通过的个人传参body
    body3:{
        "id":"3221",
        "operateOrgId":301290,
        "expectedAmount":100,
        "filledDemand":false,
        "lvUserName":"13284613014",
        "lvRegionCode":"510900"
    },


}

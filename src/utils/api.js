const api = {
  // 首页接口
  getData: function(){
  	return fly.post("/homepage/getData");
  },
  //首页历史拍品
  history: function(){
  	return fly.post("/auction/historyAuction");
  },
  /*所有历史拍品(需要传入的参数)
  入参：
    page---页码,rows---单页数量
  */
  historylist: function(postData){
    return fly.post("/auction/getMoreHisAuction",postData);
  },
  /*拍场列表
  入参：
       page---页码，rows---单页数量，state---拍场状态（数组），如：state:[2,3]，就是获取预展中和正在拍卖中的拍场
  */
  sessionlist: function(postData){
  	return fly.post("/auction/sessionInfoPage",postData);
  },
   /*拍场详情
  入参：
       auctionSessionSeq---拍场seq，customerSeq---用户seq，page---页码，rows---单页数量，term待确认，目前传0
  */
  sessionDetail: function(postData){
    return fly.post("/auction/auctionShow",postData);
  },
  /*发送验证码
  入参：
     smsText: "smsCode"     -----不清楚
     telephone : 15018084533  ------接受短信号码
     template:"updatePad"   ------应该是模板吧
  */
  sendSMSCode : function(postData) {
    return fly.post("/person/sendSMSCode",postData);
  },
  //获取服务器时间
  getServerTime : async function() {
    let time;
    await fly.get("/auction/getServerTime")
    .then(function(res){
      time = res.data;
    })
    return time;
  }
  
}

export default api

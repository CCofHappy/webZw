const api = {
  /*发送验证码
  入参：
     smsText: "smsCode"     -----不清楚
     telephone : 15018084533  ------接受短信号码
     template:"updatePad"   ------应该是模板吧
  */
  sendSMSCode : function(postData) {
    return fly.post("/app/person/sendSMSCode",postData);
  },
  // 首页接口
  getData: function(){
  	return fly.post("/app/homepage/getData");
  },
  //首页历史拍品
  history: function(){
  	return fly.post("/app/auction/historyAuction");
  },
  /*所有历史拍品(需要传入的参数)
  入参：
    page---页码,rows---单页数量
  */
  historylist: function(postData){
    return fly.post("/app/auction/getMoreHisAuction",postData);
  },
  /*拍场列表
  入参：
       page---页码，rows---单页数量，state---拍场状态（数组），如：state:[2,3]，就是获取预展中和正在拍卖中的拍场
  */
  sessionlist: function(postData){
  	return fly.post("/app/auction/sessionInfoPage",postData);
  },
   /*拍场详情
  入参：
       auctionSessionSeq---拍场seq，customerSeq---用户seq，page---页码，rows---单页数量，term待确认，目前传0
  */
  sessionDetail: function(postData){
    return fly.post("/app/auction/auctionShow",postData);
  },
  /*拍品详情
  入参：
       auctionGoodsSeq---拍品seq, customerSeq---用户seq
  */
  goodsDetail: function(postData){
    return fly.post("/app/auction/watchAuctionInfo",postData);
  },
    /* 获取出价记录
   入参：
   customerSeq---用户seq
   auctionGoodsSeq---拍品seq
   */ 
   auctionRecordDetail: function(postData){
    return fly.post('/app/person/auctionRecordDetail',postData);
   },
  /*判断有没有交过保证金
  入参：
     auctionGoodsSeq:  
     auctionSessionSeq :  
     customerSeq: 
  */
 bondPayedOrNot : function(postData) {
    return fly.post("/app/auction/bondPayedOrNot",postData);
  },
 /*判断有没有收藏
  入参：
     auctionGoodsSeq:  
     auctionSessionSeq :  
     customerSeq: 
  */
 isNotFavorite : function(postData) {
    return fly.post("/app/person/isNotFavorite",postData);
  },
  /*收藏拍品
  入参：
     auctionGoodsSeq:  
     customerSeq :  
     status:   当前收藏的状态  1在收藏，0未收藏
  */
 favorite : function(postData) {
    return fly.post("/app/person/favorite",postData);
  },
  /*拍卖出价
  入参：
     auctionGoodsSeq    拍品序号
     auctionSessionSeq  拍场序号
     customerSeq      用户序号
     price           出价价格
     highestPrice    最高价，如果是自由出价没有设置心理价就传0
  */
 raisePrice : function(postData) {
    return fly.post('/app/auction/raisePrice',postData);
  },
  /*洽谈
  入参：
     auctionGoodsSeq  拍品序号
     customerSeq      用户序号
     price            求购，出售的价格
     number           求购，出售的数量
     type             类型，   0---求购   1---出售
  */
 insertAuctionGoodsNegotiate : function(postData) {
    return fly.post('/app/auction/insertAuctionGoodsNegotiate',postData);
  },
  /*
  获取订单数据
  入参：
    customerSeq
    page
    rows
    states         订单状态：  0---待付款，1_2 ---待收货，3---已完成
   */
  findSnapshot: function(postData) {
    return fly.post('/app/person/findSnapshot',postData);
  },
  /*
  获取违约单数据
  入参：
    customerSeq
    page
    rows
   */
  getTreaty: function(postData) {
    return fly.post('/app/person/getTreaty',postData);
  },
   /*
  订单申诉接口
  入参：
    auctionSessionSeq
    customerSeq
   */
  insertOrderExplain: function(postData) {
    return fly.post('/app/person/insertOrderExplain',postData);
  },
   /*
  去付款前的检查接口（暂时不理解，参照小程序写的）
  入参：
    auctionSessionStr    字符串的选中去支付的拍场seq
   */
  paymentCheck: function(postData) {
    return fly.post('/app/paymentCheck',postData);
  },
 /*
  获取结算中心基础数据
  入参：
    customerSeq
    deliveryAddrSeq     不知道是什么，默认穿空
    snapshotSeqArray    不理解，参照小程序写的，数组来的，但是只存放了一个需要支付的拍场seq
   */
  paySnapshot: function(postData) {
    return fly.post('/app/person/paySnapshot',postData);
  },

   /*
  中威钱包支付(保证金支付)
  入参：
    auctionSessionSeq
    customerSeq
    auctionGoodsSeq
    payType   //类型是：支付拍场保证金 101; 支付拍品保证金 102; 充值 103; 订单支付 104;
    totalFee    保证金金额
    bondType    2---竞拍保证金
    中威钱包支付(拍卖订单支付)
    入参：
      
     */
   walletPay: function(postData){
     return fly.post('/app/walletPay',postData);
   },
   /*
   支付宝支付
   入参：
    除了和中威钱包一样的参数以为另外再添加一个路径参数
    fromUrl   ---    支付成功后的跳转路径
   */
    payment:function(postData){
      return fly.post('/alipay/payment',postData);
      // return fly.post('http://wap.cwhisky.com/alipay/payment',postData);
    },
    /*银联支付
   入参：
    同支付宝支付一样
    fromUrl   ---    支付成功后的跳转路径
   */
    consume:function(postData){
      return fly.post('/unionpay/consume',postData);
    },
   /* 获取账户余额
   入参：
   customerSeq---用户seq
   */ 
   getBalance: function(customerSeq){
    return fly.post('/app/person/homepage/'+customerSeq);
   },

  //获取服务器时间
  getServerTime : async function() {
    let time;
    await fly.get("/app/auction/getServerTime")
    .then(function(res){
      time = res.data;
    })
    return time;
  },
}

export default api

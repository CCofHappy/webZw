const api = {
	/*发送验证码
	入参：
	   smsText: "smsCode"     -----不清楚
	   telephone : 15018084533  ------接受短信号码
	   template:"updatePad"   ------应该是模板吧
	*/
	sendSMSCode: function(postData) {
		return fly.post("/app/person/sendSMSCode", postData);
	},
	// 首页接口
	getData: function() {
		return fly.post("/app/homepage/getData");
	},
	//首页历史拍品
	history: function() {
		return fly.post("/app/auction/historyAuction");
	},
	/*所有历史拍品(需要传入的参数)
	入参：
	  page---页码,rows---单页数量
	*/
	historylist: function(postData) {
		return fly.post("/app/auction/getMoreHisAuction", postData);
	},
	/*拍场列表
	入参：
	     page---页码，rows---单页数量，state---拍场状态（数组），如：state:[2,3]，就是获取预展中和正在拍卖中的拍场
	*/
	sessionlist: function(postData) {
		return fly.post("/app/auction/sessionInfoPage", postData);
	},
	/*拍场详情
  入参：
       auctionSessionSeq---拍场seq，customerSeq---用户seq，page---页码，rows---单页数量，term待确认，目前传0
  */
	sessionDetail: function(postData) {
		return fly.post("/app/auction/auctionShow", postData);
	},
	/*拍品详情
	入参：
	     auctionGoodsSeq---拍品seq, customerSeq---用户seq
	*/
	goodsDetail: function(postData) {
		return fly.post("/app/auction/watchAuctionInfo", postData);
	},
	/* 获取出价记录
   入参：
   customerSeq---用户seq
   auctionGoodsSeq---拍品seq
   */
	auctionRecordDetail: function(postData) {
		return fly.post('/app/person/auctionRecordDetail', postData);
	},
	/* 获取竞拍记录(我的竞拍，历史竞拍)
   入参：
   customerSeq---用户seq
   condition---排序（猜的，不知道）
   searchTrim---搜索关键字
   page---页数
   rows---数量
   states    我的竞拍传  "2,3"   历史竞拍传  "4,5"    
   */
	auctionRecord: function(postData) {
		return fly.post('/app/person/auctionRecord', postData);
	},
	/*判断有没有交过保证金
	入参：
	   auctionGoodsSeq:  
	   auctionSessionSeq :  
	   customerSeq: 
	*/
	bondPayedOrNot: function(postData) {
		return fly.post("/app/auction/bondPayedOrNot", postData);
	},
	/*判断有没有收藏
	 入参：
	    auctionGoodsSeq:  
	    auctionSessionSeq :  
	    customerSeq: 
	 */
	isNotFavorite: function(postData) {
		return fly.post("/app/person/isNotFavorite", postData);
	},
	/*收藏拍品
	入参：
	   auctionGoodsSeq:  
	   customerSeq :  
	   status:   当前收藏的状态  1在收藏，0未收藏
	*/
	favorite: function(postData) {
		return fly.post("/app/person/favorite", postData);
	},
	/*拍卖出价
	入参：
	   auctionGoodsSeq    拍品序号
	   auctionSessionSeq  拍场序号
	   customerSeq      用户序号
	   price           出价价格
	   highestPrice    最高价，如果是自由出价没有设置心理价就传0
	   "offerType":"0",   默认传0，暂时不知道为什么
	   signNo   ---  叫价记录里的编号
	*/
	raisePrice: function(postData) {
		return fly.post('/app/auction/raisePrice', postData);
	},
	/*获取当前拍品的最高叫价和最新拍卖信息(叫价前要请求一次)
	入参：
	   auctionGoodsSeq    拍品序号
	   auctionSessionSeq  拍场序号
	   customerSeq      用户序号
	*/
	getHighestPrice: function(postData){
		return fly.post('/app/person/getHighestPrice', postData);
	},
	/*洽谈
	入参：
	   auctionGoodsSeq  拍品序号
	   customerSeq      用户序号
	   price            求购，出售的价格
	   number           求购，出售的数量
	   type             类型，   0---求购   1---出售
	*/
	insertAuctionGoodsNegotiate: function(postData) {
		return fly.post('/app/auction/insertAuctionGoodsNegotiate', postData);
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
		return fly.post('/app/person/findSnapshot', postData);
	},
	/*
	获取违约单数据
	入参：
	  customerSeq
	  page
	  rows
	 */
	getTreaty: function(postData) {
		return fly.post('/app/person/getTreaty', postData);
	},
	/*
  订单申诉接口
  入参：
    auctionSessionSeq
    customerSeq
   */
	insertOrderExplain: function(postData) {
		return fly.post('/app/person/insertOrderExplain', postData);
	},
	/*
  去付款前的检查接口（暂时不理解，参照小程序写的）
  入参：
    auctionSessionStr    字符串的选中去支付的拍场seq
   */
	paymentCheck: function(postData) {
		return fly.post('/app/paymentCheck', postData);
	},
	/*
	 获取结算中心基础数据
	 入参：
	   customerSeq
	   deliveryAddrSeq     不知道是什么，默认穿空
	   snapshotSeqArray    不理解，参照小程序写的，数组来的，但是只存放了一个需要支付的拍场seq
	  */
	paySnapshot: function(postData) {
		return fly.post('/app/person/paySnapshot', postData);
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
	walletPay: function(postData) {
		return fly.post('/app/walletPay', postData);
	},
	/*
	支付宝支付
	入参：
	 除了和中威钱包一样的参数以为另外再添加一个路径参数
	 fromUrl   ---    支付成功后的跳转路径
	*/
	payment: function(postData) {
		return fly.post('/alipay/payment', postData);
		// return fly.post('http://wap.cwhisky.com/alipay/payment',postData);
	},
	/*银联支付
   入参：
    同支付宝支付一样
    fromUrl   ---    支付成功后的跳转路径
   */
	consume: function(postData) {
		return fly.post('/unionpay/consume', postData);
	},
	/* 获取账户余额
	入参：
	customerSeq---用户seq
	*/
	getBalance: function(customerSeq) {
		return fly.post('/app/person/homepage/' + customerSeq);
	},

	/* 发票页面初始化数据
	  入参：
	  customerSeq---用户seq
	  */
	cusInvoice: function(postData) {
		return fly.post('/app/person/cusInvoice', postData);
	},
	/* 更新发票 
	入参：
	customerSeq---用户seq
	email  ---电子发票邮箱
	identificationNumber   --- 发票税号
	invoiceHeadContent  --- 发票抬头
	invoiceHeadType --- 发票类型       1 公司发票   2 个人发票
	*/
	updateInvoice: function(postData) {
		return fly.post('/app/person/updateInvoice', postData);
	},
	/* 	查询物流 
	   入参：
		nu  -----   订单编号
 		
	   */
	getDelDes: function(postData) {
		return fly.post('/app/delivery/getDelDes', postData);
	},
	/* 	获取收货地址列表
	   入参：
		customerSeq
	   */
	customerSeqADD: function(customerSeq) {
		return fly.post('/app/person/customerSeqADD/' + customerSeq);
	},
	/* 	添加收货地址
	   入参：
		customerSeq,
		province   ---   省市区
		consignee  ---  收货人
		phone ---  联系电话
		addr --- 详细地址
		flag --- 是否设置为默认    1--设置为默认地址   0---不设置默认
		pCode --- 省级code
		cCode --- 市级code
		pCode --- 区级code
	   */
	addDeliveryAddr: function(postData) {
		return fly.post('/app/person/addDeliveryAddr',postData);
	},
	/* 	编辑收货地址
	   入参：
		customerSeq,
		province   ---   省市区
		consignee  ---  收货人
		phone ---  联系电话
		addr --- 详细地址
		flag --- 是否设置为默认    1--设置为默认地址   0---不设置默认
		deliveryAddrSeq  ---  编辑的地址seq
		pCode --- 省级code
		cCode --- 市级code
		pCode --- 区级code
	   */
	editDeliveryAddr: function(postData) {
		return fly.post('/app/person/editDeliveryAddr',postData);
	},
	/* 	删除收货地址
	   入参：
		customerSeq,
		deliveryAddrSeq   --- 收货地址seq
	   */
	delDeliveryAddr: function(customerSeq,deliveryAddrSeq) {
		return fly.post(`/app/person/delDeliveryAddr/${deliveryAddrSeq}/${customerSeq}`);
	},
	/* 	获取指定收货地址
	   入参：
		deliveryAddrSeq   --- 收货地址seq
	   */
	findByDeliveryAddr: function(deliveryAddrSeq) {
		return fly.post(`/app/person/findByDeliveryAddr/${deliveryAddrSeq}`);
	},
	/* 	确认收货
	   入参：
		订单seq
	   */
	validateOrder: function(seq) {
		return fly.post(`/app/person/validateOrder/${seq}`);
	},
	
	
	//获取服务器时间
	getServerTime: async function() {
		let time;
		await fly.get("/app/auction/getServerTime")
			.then(function(res) {
				time = res.data;
			})
		return time;
	},
}

export default api
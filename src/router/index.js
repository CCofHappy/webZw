import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/pages/demo'
import headContainer from '@/pages/headContainer'
// parentComponent------------空容器  class="rich-view" 用于定位过渡动画的
const parentComponent = {
	template: '<router-view class="rich-view"></router-view>'
};
Vue.use(Router)

// 路由建立优先级：流程优先，模块递减，公共组件类根据UI设计定
export default new Router({
	mode: 'history',
	routes: [{
			path: '',
			component: resolve => require(['../pages/container.vue'], resolve),
			children: [{
					path: '',
					name: 'home',
					component: resolve => require(['../pages/auction/home.vue'], resolve),
					meta: {
						title: '首页',
						requireAuth: false,
						keepAlive: true
					}
				},
				{
					path: 'community',
					name: 'community',
					component: resolve => require(['../pages/community/community.vue'], resolve),
					meta: {
						title: '社区',
						requireAuth: false,
						keepAlive: true
					}
				},
				{
					path: 'user',
					name: 'user',
					component: resolve => require(['../pages/user/user.vue'], resolve),
					meta: {
						title: '个人中心',
						requireAuth: true,
						keepAlive: true
					}
				},
				{
					path: 'mall',
					name: 'mall',
					component: resolve => require(['../pages/mall/mall.vue'], resolve),
					meta: {
						title: '商城',
						requireAuth: true,
						keepAlive: true
					}
				},
			]
		},
		
//		拍卖模块----------------------------------------------------------------------------------------start
		
		// 拍场
		{
			path: '/session',
			component: parentComponent,
			children: [{
					path: 'history',
					name: 'historySession',
					component: resolve => require(['../pages/auction/list/listPages.vue'], resolve),
					meta: {
						title: '历史拍场',
						requireAuth: false
					}
				},
				{
					path: 'daily',
					name: 'dailySession',
					component: resolve => require(['../pages/auction/list/listPages.vue'], resolve),
					meta: {
						title: '每日一拍历史拍场',
						requireAuth: false
					}
				},
				{
					path: 'preview',
					name: 'previewSession',
					component: resolve => require(['../pages/auction/list/listPages.vue'], resolve),
					meta: {
						title: '预展拍场',
						requireAuth: false
					}
				},
				{
					path: 'hot',
					name: 'hotSession',
					component: resolve => require(['../pages/auction/list/listPages.vue'], resolve),
					meta: {
						title: '正在热拍拍场',
						requireAuth: false
					}
				}
			]
		},
		// 拍品
		{
			path: '/goods',
			component: parentComponent,
			children: [
				// 历史拍卖（拍卖专场的，不包含每日一拍的历史）
				{
					path: 'history',
					name: 'history',
					component: resolve => require(['../pages/auction/list/listGoods.vue'], resolve),
					meta: {
						title: '历史拍卖',
						requireAuth: false
					}
				},
				// 每日一拍历史
				{
					path: 'dailyHistory',
					name: 'dailyHistory',
					component: resolve => require(['../pages/auction/list/listGoods.vue'], resolve),
					meta: {
						title: '每日一拍',
						requireAuth: false
					}
				},
				// 饮用精选
				{
					path: 'pick',
					name: 'pick',
					component: resolve => require(['../pages/auction/list/listGoods.vue'], resolve),
					meta: {
						title: '饮用精选',
						requireAuth: false
					}
				},
				// 每日一拍正在热拍

				{
					path: 'listDaily',
					name: 'listDaily',
					component: resolve => require(['../pages/auction/list/listDaily.vue'], resolve),
					meta: {
						title: '每日一拍',
						requireAuth: false
					},
				},
				{
					path: 'mySale',
					name: 'mySale',
					component: resolve => require(['../pages/user/mySale.vue'], resolve),
					meta: {
						title: '我的竞拍',
						requireAuth: true
					},
				}

			]
		},
		//详情 
		{
			path: '/detail',
			component: parentComponent,
			children: [
				// 拍场详情    seq---拍场seq
				{
					path: 'session/:seq',
					name: 'sessionDetail',
					component: resolve => require(['../pages/auction/detail/session.vue'], resolve),
					meta: {
						title: '拍场详情',
						requireAuth: true
					}
				},
				// 拍品详情
				{
					path: 'good/:Sseq/:Gseq',
					name: 'goodsDetail',
					component: resolve => require(['../pages/auction/detail/good.vue'], resolve),
					meta: {
						title: '拍品详情',
						requireAuth: true
					}
				},
				// 拍品出价记录   Gseq---拍品seq
				{
					path: 'record/:Gseq',
					name: 'record',
					component: resolve => require(['../pages/auction/detail/record/record.vue'], resolve),
					meta: {
						title: '出价记录',
						requireAuth: true
					}
				}

			]
		},
		// 订单
		{
			path: '/order',
			component: parentComponent,
			children: [
				// 拍卖订单
				{
					path: 'saleOrder',
					name: 'saleOrder',
					component: resolve => require(['../pages/auction/order/saleOrder.vue'], resolve),
					meta: {
						title: '拍卖订单',
						requireAuth: true
					}
				},
				// 违约订单
				{
					path: 'saleBreakOrder',
					name: 'saleBreakOrder',
					component: resolve => require(['../pages/auction/order/saleBreakOrder.vue'], resolve),
					meta: {
						title: '违约单',
						requireAuth: true
					}
				},
				// 结算中心 Sseq---拍场seq
				{
					path: 'checkout/:Sseq',
					name: 'checkout',
					component: resolve => require(['../pages/auction/order/checkout.vue'], resolve),
					meta: {
						title: '结算中心',
						requireAuth: true
					}
				},
				// 订单详情    seq---订单seq
				{
					path: 'orderDetail/:seq',
					name: 'orderDetail',
					component: resolve => require(['../pages/auction/order/detail.vue'], resolve),
					meta: {
						title: '订单详情',
						requireAuth: true
					}
				},

			]
		},
//		拍卖模块----------------------------------------------------------------------------------------end
		{
			path: '/pay',
			component: parentComponent,
			children: [{
					path: 'boon',
					name: 'boonPay',
					component: resolve => require(['../pages/pay/pay.vue'], resolve),
					meta: {
						title: '支付保证金',
						requireAuth: true
					}
				},
				{
					path: 'sale',
					name: 'salePay',
					component: resolve => require(['../pages/pay/pay.vue'], resolve),
					meta: {
						title: '拍卖支付',
						requireAuth: true
					}
				},
				{
					path: 'auctionRule',
					name: 'auctionRule',
					component: resolve => require(['../components/text/auctionRule.vue'], resolve),
					meta: {
						title: '拍卖规则',
						requireAuth: true
					}
				},
				{
					path: 'offlinePay',
					name: 'offlinePay',
					component: resolve => require(['../components/text/offlinePay.vue'], resolve),
					meta: {
						title: '线下支付',
						requireAuth: true
					}
				},
			]
		},
		
// 商城模块--------------------------------------------------------------------------------------------------start
		{
			path: '/mallBox',
			component: parentComponent,
			children: [{
				path: 'search',
				name: 'search',
				component: resolve => require(['../pages/mall/search/search.vue'], resolve),
				meta: {
					title: '',
					requireAuth: true
				}
			},
			{
				path: 'searchResult',
				name: 'searchResult',
				component: resolve => require(['../pages/mall/search/searchResult.vue'], resolve),
				meta: {
					title: '',
					requireAuth: true
				}
			},
			{
				path: 'allMall',
				name: 'allMall',
				component: resolve => require(['../pages/mall/allMall.vue'], resolve),
				meta: {
					title: '全部商品',
					requireAuth: true
				}
			},
			{
				path: 'flashSale',
				name: 'flashSale',
				component: resolve => require(['../pages/mall/flashSale.vue'], resolve),
				meta: {
					title: '限时抢购',
					requireAuth: true
				}
			},
			{
				path: 'mallDetails',
				name: 'mallDetails',
				component: resolve => require(['../pages/mall/mallDetails.vue'], resolve),
				meta: {
					title: '商品详情',
					requireAuth: true
				}
			},
			{
				path: 'groupBuy',
				name: 'groupBuy',
				component: resolve => require(['../pages/mall/groupBuy.vue'], resolve),
				meta: {
					title: '拼团人数',
					requireAuth: true
				}
			},
			{
				path: 'shoppingBag',
				name: 'shoppingBag',
				component: resolve => require(['../pages/mall/shoppingBag.vue'], resolve),
				meta: {
					title: '购物袋',
					requireAuth: true
				}
			},
			{
				path: 'rockResult',
				name: 'rockResult',
				component: resolve => require(['../pages/mall/rockResult.vue'], resolve),
				meta: {
					title: '摇号结果',
					requireAuth: true
				}
			},
			{
				path: 'mallOrder',
				name: 'mallOrder',
				component: resolve => require(['../pages/mall/mallOrder/mallOrder.vue'], resolve),
				meta: {
					title: '商城订单',
					requireAuth: true
				}
			},
			{
				path: 'mallOrderDetail',
				name: 'mallOrderDetail',
				component: resolve => require(['../pages/mall/mallOrder/mallOrderDetail.vue'], resolve),
				meta: {
					title: '订单详情',
					requireAuth: true
				}
			},
			{
				path: 'afterSaleServe',
				name: 'afterSaleServe',
				component: resolve => require(['../pages/mall/mallOrder/afterSaleServe.vue'], resolve),
				meta: {
					title: '售后服务',
					requireAuth: true
				}
			},
			{
				path: 'applyRefund',
				name: 'applyRefund',
				component: resolve => require(['../pages/mall/mallOrder/applyRefund.vue'], resolve),
				meta: {
					title: '申请退款',
					requireAuth: true
				}
			},
			{
				path: 'refundDetail',
				name: 'refundDetail',
				component: resolve => require(['../pages/mall/mallOrder/refundDetail.vue'], resolve),
				meta: {
					title: '退款详情',
					requireAuth: true
				}
			}]
		},
// 商城模块--------------------------------------------------------------------------------------------------end

// 社区模块--------------------------------------------------------------------------------------------------start
		{
			path: '/communityBox',
			component: parentComponent,
			children: [
				//搜索页
				{
					path:'communitySeach',
					name:'communitySeach',
					component: resolve => require(['../pages/common/search/search.vue'], resolve),
					meta: {
						title: '搜索',
						requireAuth: false
					}
				},
//				帖子搜索结果页
				{
					path:'communitySeachResult',
					name:'communitySeachResult',
					component: resolve => require(['../pages/common/search/result.vue'], resolve),
					meta: {
						title: '帖子搜索结果',
						requireAuth: false
					}
				},
				//帖子详情
				{
					path:'communityDetail/:pid/:uid',
					name:'communityDetail',
					component: resolve => require(['../pages/community/detail.vue'], resolve),
					meta: {
						title: '帖子详情',
						requireAuth: false
					}
				}
			]
		},
// 社区模块--------------------------------------------------------------------------------------------------end

		// 所有模块公用的，比如地址管理，物流，发票等
		{
			path: '/common',
			component: parentComponent,
			children: [
				// 发票   
				{
					path: 'invoice',
					name: 'invoice',
					component: resolve => require(['../pages/common/invoice.vue'], resolve),
					meta: {
						title: '发票',
						requireAuth: true
					}
				},
				//收货地址
				{
					path: 'addressList',
					component: parentComponent,
					children:[
						{	//地址列表
							path: '',
							name: 'addressList',
							component: resolve => require(['../pages/common/addressList.vue'], resolve),
							meta: {
								title: '收货地址',
								requireAuth: true
							}
						},
						{	//地址管理
							path: 'addressMent',
							name: 'addressMent',
							component: resolve => require(['../pages/common/addressMent.vue'], resolve),
							meta: {
								title: '管理地址',
								requireAuth: true
							}
						},
						{	//添加地址
							path: 'addressAdd',
							name: 'addressAdd',
							component: resolve => require(['../pages/common/addressEdit.vue'], resolve),
							meta: {
								title: '添加收货地址',
								requireAuth: true
							}
						},
						{	//编辑地址   seq --- 地址seq
							path: 'addressEdit/:seq',
							name: 'addressEdit',
							component: resolve => require(['../pages/common/addressEdit.vue'], resolve),
							meta: {
								title: '编辑收货地址',
								requireAuth: true
							}
						}
					]
				},
				//物流查询   Oseq---订单seq
				{
					path: 'logistics/:Oseq',
					name: 'logistics',
					component: resolve => require(['../pages/common/logistics.vue'], resolve),
					meta: {
						title: '物流跟踪',
						requireAuth: true
					}
				},
			]
		},
		{
			path: '/login',
			component: parentComponent,
			children: [{
					path: '',
					name: 'login',
					component: resolve => require(['../pages/login/newLogin.vue'], resolve),
					meta: {
						title: '登录',
						requireAuth: false
					}
				},
				{
					path: 'register',
					name: 'register',
					component: resolve => require(['../pages/login/newRegister.vue'], resolve),
					meta: {
						title: '账号注册',
						requireAuth: false
					}
				},
				{
					path: 'replace',
					name: 'replace',
					component: resolve => require(['../pages/login/forgetPassword.vue'], resolve),
					meta: {
						title: '重置密码',
						requireAuth: false
					}
				},
				{
					path: 'userRegisterProtocol',
					name: 'userRegisterProtocol',
					component: resolve => require(['../components/text/userRegisterProtocol.vue'], resolve),
					meta: {
						title: '用户注册协议',
						requireAuth: false
					}
				}
			]
		},
		{
			path: '*',
			name: 'error',
			component: resolve => require(['../pages/error/error'], resolve),
		},
		{
			path: '/demo',
			name: 'demo',
			component: demo
		},
		{
			path: '/demo2',
			component: parentComponent,
			children: [{
				path: '',
				name: 'demo2',
				component: demo
			}]
		},
		// 下面是嵌套路由、动态路由示例-------------------------------start
		/*    {
				path: 'a',
				name: 'a',
				component: parentComponent,
				children: [
					{
						path: 'b',
						component: parentComponent,
						children: [{
								path: '',
								name: 'c',
								component: resolve => require(['ccc'], resolve),
							},
							{
								path: 'd',
								name: 'd',
								component: resolve => require(['ddd'], resolve),
							},
							// 动态路由示例
							{
								path: 'e/:id',
								name: 'e',
								component: resolve => require(['eee'], resolve),
							}
						]
					},
				]
			},
		*/
		// ----------------------------------------------------------------------end
	],
})
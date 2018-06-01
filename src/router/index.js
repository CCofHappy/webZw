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
						requireAuth: false
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

			]
		},
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
			]
		},
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
					component: resolve => require(['../pages/login/login.vue'], resolve),
					meta: {
						title: '登录',
						requireAuth: false
					}
				},
				{
					path: 'register',
					name: 'register',
					component: resolve => require(['../pages/login/register.vue'], resolve),
					meta: {
						title: '账号注册',
						requireAuth: false
					}
				},
				{
					path: 'replace',
					name: 'replace',
					component: resolve => require(['../pages/login/replace.vue'], resolve),
					meta: {
						title: '重置密码',
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
		// 商城路由
		{
			path: '/mallBox',
			component: parentComponent,
			children: [{
				path: 'search',
				name: 'search',
				component: resolve => require(['../pages/mall/search/search.vue'], resolve)
			},
			{
				path: 'searchResult',
				name: 'searchResult',
				component: resolve => require(['../pages/mall/search/searchResult.vue'], resolve)
			},
			{
				path: 'allMall',
				name: 'allMall',
				component: resolve => require(['../pages/mall/allMall.vue'], resolve)
			},
			{
				path: 'flashSale',
				name: 'flashSale',
				component: resolve => require(['../pages/mall/flashSale.vue'], resolve)
			},
			{
				path: 'mallDetails',
				name: 'mallDetails',
				component: resolve => require(['../pages/mall/mallDetails.vue'], resolve)
			}]
		}
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
	]

})
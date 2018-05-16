import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/pages/demo'
// parentComponent------------空容器  class="rich-view" 用于定位过渡动画的
const parentComponent = {
	template: '<router-view class="rich-view"></router-view>'
};
Vue.use(Router)

// 路由建立优先级：流程优先，模块递减，公共组件类根据UI设计定
export default new Router({
  mode: 'history',
  routes: [
    {
		path: '',
		component: resolve => require(['../pages/container.vue'], resolve),
		children: [
			{
				path: '',
				name: 'home',
				component: resolve => require(['../pages/home/home.vue'], resolve),
				meta: {
					title: '首页',
					requireAuth: false
				}
			},
			{
				path: '/user',
				name: 'user',
				component: resolve => require(['../pages/user/user.vue'], resolve),
				meta: {
					title: '个人中心',
					requireAuth: true
				}
			},
		]
    },
  	// 拍场
    {
		path: '/session',
		component: parentComponent,
		children: [
			{
				path: 'history',
				name: 'historySession',
				component: resolve => require(['../pages/list/listPages.vue'], resolve),
				meta: {
					title: '历史拍场',
					requireAuth: false
				}
			},
			{
				path: 'daily',
				name: 'dailySession',
				component: resolve => require(['../pages/list/listPages.vue'], resolve),
				meta: {
					title: '每日一拍历史拍场',
					requireAuth: false
				}
			},
			{
				path: 'preview',
				name: 'previewSession',
				component: resolve => require(['../pages/list/listPages.vue'], resolve),
				meta: {
					title: '预展拍场',
					requireAuth: false
				}
			},
			{
				path: 'hot',
				name: 'hotSession',
				component: resolve => require(['../pages/list/listPages.vue'], resolve),
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
		// component: resolve => require(['../pages/list/listGoods.vue'], resolve),
		children: [
			{
				path: 'history',
				name: 'history',
				component: resolve => require(['../pages/list/listGoods.vue'], resolve),
				meta: {
					title: '历史拍卖',
					requireAuth: false
				}
			},
			{
				path: 'daily',
				name: 'daily',
				component: resolve => require(['../pages/list/listGoods.vue'], resolve),
				meta: {
					title: '每日一拍历史拍卖',
					requireAuth: false
				}
			},
			{
				path: 'pick',
				name: 'pick',
				component: resolve => require(['../pages/list/listGoods.vue'], resolve),
				meta: {
					title: '饮用精选',
					requireAuth: false
				}
			}
		]
    },
     //详情 
    {
    	path: '/detail',
    	component: parentComponent,
    	children: [
			{
				path:'session/:seq',
				name:'sessionDetail',
				component: resolve => require(['../pages/detail/session.vue'], resolve),
				meta: {
					title: '拍场详情',
					requireAuth: false
				}
			},
			{
				path:'good/:seq',
				name:'goodsDetail',
				component: resolve => require(['../pages/detail/good.vue'], resolve),
				meta: {
					title: '拍品详情',
					requireAuth: false
				}
			}
    	]
    },
    {
    	path:'/pay',
    	component: parentComponent,
    	children: [
    		{
    			path:'boon',
    			name:'boonPay',
    			component: resolve => require(['../pages/pay/pay.vue'], resolve),
				meta: {
					title: '支付保证金',
					requireAuth: false
				}
    		},
    		{
    			path:'sale',
    			name:'salePay',
    			component: resolve => require(['../pages/pay/pay.vue'], resolve),
				meta: {
					title: '拍卖支付',
					requireAuth: false
				}
    		}
    	]
    },
    {
      path: '/login',
      component: parentComponent,
	  children: [
			{
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
		name:'error',
		component: resolve => require(['../pages/error/error'], resolve),
	},
    {
      path: '/demo',
      name: 'demo',
      component: demo
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

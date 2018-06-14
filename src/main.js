require('./utils/bootstrap');
import Vue from 'vue'
import App from './App'
import router from './router'       
import store from '@/store'         
import YDUI from 'vue-ydui' 
import { Radio, Dropdown,DropdownMenu,DropdownItem,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'  
import FastClick from 'fastclick'     //解决点击事件延迟问题
import 'vue-ydui/dist/ydui.rem.css'
import api from './utils/api'
import {VeeValidate, Veeconfig} from './utils/validation.js';   //验证规则
import session from './utils/storage/session.js';  
import local from './utils/storage/local.js';  
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //引入swiper滑块样式
// import './styles/index.css'
import './styles/common.less'
import './styles/init.less'
import { Popup, Indicator, IndexList, IndexSection, Cell } from 'mint-ui'
  
import 'mint-ui/lib/style.css'
Vue.component(Popup.name, Popup);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);
Vue.use(Radio);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(VueAwesomeSwiper);
Vue.use(VeeValidate,Veeconfig);
Vue.config.productionTip = false
Vue.prototype.api = api;
Vue.prototype.loadingMint = Indicator;
FastClick.attach(document.body)

Vue.prototype.session = session;
Vue.prototype.local = local;
// ajax请求
Vue.prototype.ajaxPost = function(url,postData,callback){
  fly.post(url,postData)
  .then((res) => {
    if(typeof callback == 'function'){
      callback(res)
    }
  })
  .catch((err) => {
    console.log(err)
    if(typeof errorback == 'function'){
      errorback(res)
    }
  })
}
Vue.prototype.ajaxGet = function(url,callback){
  fly.get(url)
  .then((res) => {
    if(typeof callback == 'function'){
      callback(res)
    }
  })
  .catch((err) => {
    console.log(err)
    if(typeof errorback == 'function'){
      errorback(res)
    }
  })
}
Vue.use(YDUI)
Vue.use(VueLazyload)  /* 图片懒加载插件 */
// 导航守卫
router.beforeEach((to, from, next) => {
		let scrollTop = window.scrollY;
	  if (from.name) {
      session.set(from.name, {
        history: true,
        scrollTop: scrollTop
      })
    }
    // 判断设备入口
    // 页面上判断  v-if="Number(this.local.get('client'))"
    if(to.query.platform == 'app'){
        local.set('client', 0);
      }else {
        local.set('client', 1);
      }

    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (Cookie.get('token')) {  // 获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
 
router.afterEach((toRoute, fromRoute) => {
 	const to = toRoute.name
  const h = session.get(to)
  if (h && h.scrollTop >= 0) {
    Vue.nextTick(() => {
      window.scroll(0, h.scrollTop)
    })
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

require('./utils/bootstrap');
import Vue from 'vue'
import App from './App'
import router from './router'       
import store from '@/store'         
import YDUI from 'vue-ydui'       
import VueLazyload from 'vue-lazyload'  
import VueLocalStorage from 'vue-localstorage'
import 'vue-ydui/dist/ydui.rem.css'
import config from '@/components/config/config'
import api from './utils/api'
import {VeeValidate, Veeconfig} from './utils/validation.js';   //验证规则
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //引入swiper滑块样式
// import './styles/index.css'
import './styles/common.less'
Vue.use(VueAwesomeSwiper);
Vue.use(VeeValidate,Veeconfig);
Vue.use(VueLocalStorage)
Vue.config.productionTip = false
Vue.prototype.api = api;
Vue.prototype.formtDate = window.formtDate;
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
    // 判断设备入口
    // 页面上判断  v-if="Number(this.$localStorage.get('client'))"
    if(to.query.platform == 'app'){
        Vue.localStorage.set('client', 0);
      }else {
        Vue.localStorage.set('client', 1);
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
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
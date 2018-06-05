import Vue from 'vue'
import {validForm} from '@/utils/index.js'
import config from '@/utils/config'
import Cookie from 'js-cookie'
import md5 from 'js-md5'
const MobileDetect = require('mobile-detect')  // 获取设备参数
const md = new MobileDetect(window.navigator.userAgent)
const Fly=require("flyio/dist/npm/fly")
// 全局变量设置
window.Cookie = Cookie;
window.md5 = md5;
window.fly = new Fly;
window.validForm = validForm   //全局验证方法
Vue.prototype.bootRatio = 0.05;   //佣金比例
Vue.prototype.servicePhone = '400-888-8888';   //客服电话号码
//使用方法   :href="`tel:${servicePhone}`"
Vue.prototype.configConst = config;
fly.config.baseURL=config.wapApi
// 请求拦截器-----------------------------------------------------------start
fly.interceptors.request.use((request) => {
  request.headers["Accept"]="application/json";
  request.headers["platform"]="wap";
  request.headers["mode"]=md.mobile();
  request.headers["system"]=md.os();
  request.headers["apiversion"]="v2.2.4";
  request.headers["etoken"]=Cookie.get('token');
  // request.headers["X-Tag"]="flyio";
  return request
})
// 请求拦截器-----------------------------------------------------------end

// 返回拦截器-----------------------------------------------------------start
fly.interceptors.response.use(
  (response, promise) => {
    if(response.data.state == -1){
      Cookie.remove('token')
      Vue.prototype.$dialog.toast({
          mes: '请登录后再操作',
          timeout: 2000,
          callback: () => {
              window.location.reload();
          }
      });
    }
    return promise.resolve(response.data)
  },
  (err, promise) => {
  	console.log(err)
  	switch(err.status) {
		case 403:
		Vue.prototype.$dialog.alert({mes:'403'})
	  case 404:
		Vue.prototype.$dialog.alert({mes:'404'})
	}
    return promise.resolve()
  }
)
// 返回拦截器-----------------------------------------------------------end
Date.prototype.Format = function(fmt) { //author: meizz
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};


// 调用方法  时间格式化 
window.formtDate = function(date,type){
    if(!date) return;
    switch(type){
        case 1:
            return new Date(date).Format("yyyy.MM.dd");
            break;
        case 2:
            return new Date(date).Format("yyyy.MM.dd hh:mm:ss");
            break;
        case 3:
            return new Date(date).Format("yyyy-MM-dd hh:mm:ss");
            break;
        case 4:
            return new Date(date).Format("yyyy.MM.dd hh:mm");
            break;
        case 5:
            return new Date(date).Format("MM.dd hh:mm");
            break;
        case 6:
            return new Date(date).Format("MM/dd/yyyy hh:mm:ss");
            break;
        case 7:
            return new Date(date).Format("MM/dd");
            break;
        case 8:
            return new Date(date).Format("hh:mm");
            break;
        case 9:
            return new Date(date).Format("yyyy/MM/dd hh:mm:ss");
            break;
    }
};
Vue.prototype.formtDate = window.formtDate;
// 全局过滤器
// replaceSG---去掉空格
Vue.filter('replaceSG', function (value) {
  if (!value) return ''
  value = value.replace(/\s/g,"")
  return value
})
Vue.filter('phoneText', function (value) {
  if (!value) return ''
  value = value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  return value
})
Vue.filter('replaceTime', function (value) {
  if (!value) return ''
  value = value.substring(5,16);
  return value
})
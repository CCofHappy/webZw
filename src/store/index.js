import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/api'
import { formatIndexList } from '@/utils'
import transition from './modules/transition'
import server from './modules/server'
import position from './modules/position'
import Data from './modules/Data'


/* Vuex状态管理器  帮助文档：https://vuex.vuejs.org/zh-cn/installation.html
-------------------------------------------------------------------------------------------*/
Vue.use(Vuex)
 
const store = new Vuex.Store({
  modules: {
    transition,
    server,
    position,
    Data
  },
  
})
export default store



// 如果项目中需要统一管理的数据较少，不建议使用vuex
// vuex状态管理器非必用，根据项目需求来定------------------------------------------------------

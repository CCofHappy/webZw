import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/api'
import { formatIndexList } from '@/utils'

/* Vuex状态管理器  帮助文档：https://vuex.vuejs.org/zh-cn/installation.html
-------------------------------------------------------------------------------------------
使用场景：单页面应用中，需要使用无限加载，下拉一次保存一次，每次只加载20个
通过状态管理器管理下拉了多少次，从而去触发请求获取第几次（第几页的数据）
程序执行过程:
main.js----页面----调用vuex里的方法---改变vuex里存的数据---同步到页面上
vuex里的方法调用的是api.js里的方法
-------------------------------------------------------------------------------------------*/
Vue.use(Vuex)
//petals用于存放当前页的数据，num当前页数
const store = new Vuex.Store({
  state: {
    petals: [],    
    num: 1
  },
  mutations: {
    // mutations---更新状态管理器里的数据，变更状态。
    petals (state, data) {
      state.petals = data
    }
  },
  actions: {
    // actions---提交的是 mutation
    async getPetals ({ state, commit }, init) {
      let replytime = Date.now()
      const petals = await api.getPetals(replytime, state.num)
      state.num++
      if (!petals) return
      const formatedPetalList = formatIndexList(JSON.parse(petals).showapi_res_body.contentlist)
    // init用于判断是否第一次下拉，第一次下拉直接赋值，否则拼接数据（true第一次下拉，false非第一次）
      if (init) {
        // 调用状态管理器中的更新数据的方法，将获取到的新数据，存放到vuex里中
        commit('petals', formatedPetalList)
      } else {
        commit('petals', state.petals.concat(formatedPetalList))
      }
    }
  }
})

export default store



// 如果项目中需要统一管理的数据较少，不建议使用vuex
// vuex状态管理器非必用，根据项目需求来定------------------------------------------------------

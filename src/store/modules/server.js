const server = {
  state: {
     serverTime:null,    //服务器时间
     payUrl:'',    //三方支付完后跳转的页面路径
  },
  mutations: {
    setTime: (state,time) => {
        state.serverTime = time
    },
    setPayUrl: (state,url) => {
        state.payUrl = url
    }
  },
  actions: {
    getServerTime ({commit}){
      fly.get('app/auction/getServerTime')
      .then((res) => {
        commit('setTime',res.data)
      })
    }
  }
}

export default server

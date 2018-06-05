const server = {
  state: {
     serverTime:null,    //服务器时间
  },
  mutations: {
    setTime: (state,time) => {
        state.serverTime = time
    },
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

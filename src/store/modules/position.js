// 存放滚动高度
const position = {
  state: {
     recruitScrollY:0,
     listScrollY:0,
  },
  mutations: {
    eposition (state, position) {
      state.recruitScrollY = position
    },
    elist (state, position) {
      state.listScrollY = position
    },
  },
  actions: {
   
  }
}

export default position

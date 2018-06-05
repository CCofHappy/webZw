// 存放滚动高度
const position = {
  state: {
     recruitScrollY:0,
     listScrollY:0,
     scrollList:{
     	page:1,
     	scrollTop:0
     }     //记录无限加载列表滚动数据
  },
  mutations: {
    eposition (state, position) {
      state.recruitScrollY = position
    },
    elist (state, position) {
      state.listScrollY = position
    },
    setScrollList(state, scrollList) {
    	state.scrollList = scrollList;
    },
   initScrollList(state) {
    	state.scrollList = {page:1,scrollTop:0}
    }
  },
  actions: {
   
  }
}

export default position

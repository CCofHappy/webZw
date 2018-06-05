const transition = {
  state: {
  	//动画切换效果
     transitionName:'slide-left',
//   loading动画显示隐藏
     loading:false,
  },
  mutations: {
    CHANGE_TRANSITION: (state,path) => {
        if(path == '/') {
          state.transitionName = 'slide-right';
        } else {
          state.transitionName = 'slide-left';
        }
    },
    setLoading: (state,loading) => {					//页面使用方法   this.$store.commit('setLoading',true)   this.$store.commit('setLoading',false);
    	state.loading = loading;
    }
  },
  actions: {
    // toggleSideBar({ commit }) {
    //   commit('TOGGLE_SIDEBAR')
    // },
    // setLanguage({ commit }, language) {
    //   commit('SET_LANGUAGE', language)
    // }
  }
}

export default transition

const transition = {
  state: {
     transitionName:'slide-left'
  },
  mutations: {
    CHANGE_TRANSITION: (state,path) => {
        if(path == '/') {
          state.transitionName = 'slide-right';
        } else {
          state.transitionName = 'slide-left';
        }
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

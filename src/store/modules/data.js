const Data = {
  state: {
     biddenData:{},     //叫价的拍品信息
     biddenPopup:false, //叫价选项卡的显隐标记
     negotiateData:{},      //私洽弹出框的拍品信息
     negotiatePopup:false   //私洽弹出框的显隐标记
  },
  mutations: {
    setBiddenData (state, data) {
      state.biddenData = data
    },
    setBiddenPopup (state, blo) {
      state.biddenPopup = blo
    },
    setNegotiateData (state, data) {
      state.negotiateData = data
    },
    setNegotiatePopup (state, blo) {
      state.negotiatePopup = blo
    }
  },
  actions: {
   
  }
}

export default Data

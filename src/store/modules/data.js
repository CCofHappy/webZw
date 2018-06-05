const Data = {
  state: {
     biddenData:{},     //叫价的拍品信息
     biddenPopup:false, //叫价选项卡的显隐标记
     negotiateData:{},      //私洽弹出框的拍品信息
     negotiatePopup:false,   //私洽弹出框的显隐标记
     //选择完地址后，把选择的地址seq存放起来
     deliveryAddrSeq:'',
  },
  mutations: {
  	//存放出价商品的数据
    setBiddenData (state, data) {
      state.biddenData = data
    },
    //设置出价弹窗的显隐标记
    setBiddenPopup (state, blo) {
      state.biddenPopup = blo
    },
    //存放私洽弹窗的数据
    setNegotiateData (state, data) {
      state.negotiateData = data
    },
    //设置私洽弹窗的显隐标记
    setNegotiatePopup (state, blo) {
      state.negotiatePopup = blo
    },
    //存放选择完地址后存放选中的地址seq
     setDeliveryAddrSeq (state, seq) {
      state.deliveryAddrSeq = seq
    },
  },
  actions: {
   
  }
}

export default Data

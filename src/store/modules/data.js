const Data = {
  state: {
     biddenData:{},     //叫价的拍品信息
     biddenPopup:false, //叫价选项卡的显隐标记
     negotiateData:{},      //私洽弹出框的拍品信息
     negotiatePopup:false,   //私洽弹出框的显隐标记
     // // 订单提交的
     // orderSubmit: {
     //  customerSeq:'',
     //  deliveryAddrSeq:'',   //地址seq，默认为空，就是默认的地址，如果选择完之后就更改state里的deliveryAddrSeq值
     //  snapshotSeqArray:[]   //需要支付的订单拍场seq，以前是多选所以这里是数组，现在是单选，数组里只放一个拍场的seq即可
     // },
     // 发票信息，只有选择完发票后才会触发，存入发票的信息，用于订单提交(这个数据主要是在选择发票页面触发的)
     invoice:{
      
     }
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

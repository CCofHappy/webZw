<template>
  <div class="bggray">
    <titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
    <div class="sky-box-cell padding-bottom-lg">
      <yd-cell-group>
          <yd-cell-item>
              <span slot="left" class="fw600">收货人信息</span>
          </yd-cell-item>
          <router-link :to="{name:'addressList'}">
          	<yd-cell-item class="widthRich">
              <div slot="left" class="position">
                <p class="clearfix">
                  <span class="pull-left">{{deliveryAddr.consignee}}</span>
                  <span class="pull-right margin-top-xs">{{deliveryAddr.phone}}</span>
                </p>
                <p class="breakWord margin-top-xs">
                  {{deliveryAddr.province + deliveryAddr.addr | replaceSG}}
                </p>
                <i class="iconfont icon-Slicex13 fs12"></i>
              </div>
          </yd-cell-item>
          </router-link>
          
      </yd-cell-group>

      <yd-cell-group>
        <yd-cell-item class="widthRich" type="link" href="/common/invoice">
            <div slot="left" class="position">
              <p class="clearfix">
                <span class="pull-left fw600">发票</span>
                <span class="pull-right" v-if="cusInvoice.invoiceHeadType == 0">不开发票</span>
                <span class="pull-right" v-if="cusInvoice.invoiceHeadType == 1">{{cusInvoice.invoiceHeadContent}}</span>
                <span class="pull-right" v-if="cusInvoice.invoiceHeadType == 2">个人</span>
              </p>
              <p class="breakWord margin-top-xs" v-if="cusInvoice.invoiceHeadType == 1">
                {{cusInvoice.identificationNumber}}
              </p>
              <i class="iconfont icon-Slicex13 fs12"></i>
            </div>
        </yd-cell-item>
     
      </yd-cell-group>

       <yd-cell-group>
          <yd-cell-item>
              <span slot="left" class="fw600">{{paySnapshot.length}}件商品</span>
          </yd-cell-item>
          <yd-cell-item class="widthRich" v-for="item,key in paySnapshot" :key="key">
              <div slot="left" class="position clearfix">
                <img class="leftImg" :src="item.auctionGoodsIcon">
                <div class="rightText">
                  <p class="textfir" style="width: 5.5rem;">{{item.auctionGoodsName}}</p>
                  <p class="margin-top-sm">成交价：￥ {{item.finalPrice}}</p>
                </div>
              </div>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix fs12" style="padding-right: .2rem;">
                <p>
                  <span>商品总额</span>
                  <span class="pull-right">￥{{orderDes.totalFee}}</span>
                </p>
                <p class="margin-top-sm">
                  <span>保证金</span>
                  <span class="pull-right">－ ¥ {{orderDes.totalBail}}</span>
                </p>
                <p class="margin-top-sm margin-bottom-sm">
                  <span>商品总额</span>
                  <span class="pull-right">＋ ¥ {{orderDes.brokerage}}</span>
                </p>
              </div>
          </yd-cell-item>
      </yd-cell-group>

    </div>
    
   


    <!-- 结算底部 -->
    <footer class="footFixed">
      <div class="fs16">
        <span class="padding-sm margin-top-xs pull-left">应付金额：<span class="red fw600">￥{{orderDes.disbursements}}</span></span>
        <yd-button @click.native="submit" class="sky-btn sky-btn-orange pull-right sky-btn-richmd" type="primary">提交订单</yd-button>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  components: {
        titleHead
    },
  data () {
    return {
        customerSeq:Cookie.get('userSeq'),
        // customerSeq:990512,
        snapshotSeqArray: [this.$route.params.Sseq],
      deliveryAddr:{},    //地址数据
      orderDes: {},      //订单价格清单数据
      paySnapshot:[],    //订单拍品数据(这个订单下面一共有多少个拍品)
      cusInvoice:{}      //发票数据
    }
  },
  computed: {
  	...mapState({
      deliveryAddrSeq: state => state.Data.deliveryAddrSeq,
    })
      
  },
  methods: {
  	 submit(){
  	 	  //存放的数据，供跳转到支付页面后使用
  	 	  let data = {
  	 	  	auctionGoodsSeqStr:'',
  	 	  	auctionSessionSeqStr:'',
  	 	  	totalFee:this.orderDes.totalFee,
  	 	  	payType:104,
  	 	  	invoiceSeq:this.cusInvoice.invoiceSeq,
  	 	  	deliveryAddrSeq:this.deliveryAddr.deliveryAddrSeq,
  	 	  	customerSeq:Cookie.get('userSeq')
  	 	  }
  	 	  //参考小程序的入参
  	 		this.paySnapshot.forEach((e)=>{
  	 			data.auctionGoodsSeqStr += e.auctionGoodsSeq + ","
  	 			data.auctionSessionSeqStr += e.auctionSessionSeq + ","
  	 		})
  	 	  this.$localStorage.set('payOrder',JSON.stringify(data))
  	 		this.$router.replace({
  	 			name:'salePay'
  	 		})
  	 },
  	 getData(){
  	 	 fly.all([this.api.paySnapshot({
  	 	 	customerSeq:Cookie.get('userSeq'),
  	 	 	snapshotSeqArray: [this.$route.params.Sseq,this.$route.params.Sseq],
  	 	 	deliveryAddrSeq:this.deliveryAddrSeq
  	 	 }),this.api.cusInvoice({customerSeq:this.customerSeq})])
	       .then(fly.spread((paySnapshot, cusInvoice) => {
	          this.deliveryAddr = paySnapshot.data.deliveryAddr
	          this.orderDes = paySnapshot.data.orderDes
	          this.paySnapshot = paySnapshot.data.paySnapshot
	          this.cusInvoice = cusInvoice.data
	      }))
  	 }
      
  },
  mounted() {
      this.getData()
      
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>

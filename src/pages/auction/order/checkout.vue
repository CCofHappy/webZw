<template>
  <div class="bggray">
    <titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
    <div class="sky-box-cell padding-bottom-lg">
      <yd-cell-group>
          <yd-cell-item>
              <span slot="left" class="fw600">收货人信息</span>
          </yd-cell-item>
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
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  components: {
        titleHead
    },
  data () {
    return {
      postData: {
        customerSeq:Cookie.get('userSeq'),
        // customerSeq:990512,
        deliveryAddrSeq:'',
        snapshotSeqArray: [this.$route.params.Sseq]
      },
      deliveryAddr:{},    //地址数据
      orderDes: {},      //订单价格清单数据
      paySnapshot:[],    //订单拍品数据
      cusInvoice:{}      //发票数据
    }
  },
  computed: {
      
  },
  methods: {
  	 submit(){
  	 	
  	 }
      
  },
  mounted() {
       fly.all([this.api.paySnapshot(this.postData),this.api.cusInvoice({customerSeq:this.postData.customerSeq})])
       .then(fly.spread((paySnapshot, cusInvoice) => {
          this.deliveryAddr = paySnapshot.data.deliveryAddr
          this.orderDes = paySnapshot.data.orderDes
          this.paySnapshot = paySnapshot.data.paySnapshot
          this.cusInvoice = cusInvoice.data
      }))
      
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>

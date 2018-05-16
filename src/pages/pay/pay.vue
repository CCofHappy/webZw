<template>
  <div class="bggray">
    <titleHead :bg="'#F7F7F7'"></titleHead>
    <div class="padding-sm">
      <yd-radio-group v-model="boonType" class="cl-box cl-box-border">
        <div class="cl-row" @click="boonType = 1">
          <div class="cl-td">
            <p>全场保证金：<span>￥2000</span></p>
            <p class="gray margin-top-xs fs12">针对全场拍品有效</p>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="1">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="boonType = 2">
          <div class="cl-td">
            <p>单品保证金：<span>￥2000</span></p>
            <p class="gray margin-top-xs fs12">针对全场拍品有效</p>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="2">&nbsp;</yd-radio>
          </div>
        </div>
      </yd-radio-group>
 
      <yd-radio-group v-model="payType" class="cl-box cl-box-border margin-top-sm">
        <div class="cl-row">
          <div class="cl-td">
            <b>支付方式</b>
          </div>
          <div class="cl-td">
          </div>
        </div>
        <div class="cl-row" @click="payType = 1">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payzhongwei.png"><span class="margin-left-sm margin-top-xs pull-left">中威钱包<span class="gray margin-left-md fs12">极速安全支付</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="1">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="payType = 2">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payzhifubao.png"><span class="margin-left-sm margin-top-xs pull-left">支付宝<span class="gray margin-left-md fs12">支付宝专属服务</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="2">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="payType = 3">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payyinlian.png"><span class="margin-left-sm margin-top-xs pull-left">银联支付<span class="gray margin-left-md fs12">中国银联在线支付</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="3">&nbsp;</yd-radio>
          </div>
        </div>
     </yd-radio-group>
      
      <div class="margin-top-md margin-left-xs">
         <yd-checkbox class="padding-right-0" color="#C83A03" v-model="checkbox">竞拍需同意中威网</yd-checkbox><router-link class="ablue" to="/">《拍卖规则》</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  name: 'pay',
  components: {
        titleHead
    },
  data () {
    return {
      boonType: 1,      //保证金类型
      payType:1,      //支付类型
      checkbox: true,
      auctionGoodsSeq:this.$route.query.goodsSeq,  //商品seq
      auctionSessionSeq:this.$route.query.sessionSeq,  //拍场seq
    }
  },
  computed: {
      
  },
  methods: {
  	// 支付保证金页面初始化数据
    boonPayData() {
      let postData = {
        auctionGoodsSeq : this.auctionGoodsSeq,
        auctionSessionSeq : this.auctionSessionSeq,
        customerSeq : Cookie.get('userSeq') 
      }
      this.ajaxPost('/auction/getBond',postData,(res) => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.boonPayData()
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped>
 
</style>

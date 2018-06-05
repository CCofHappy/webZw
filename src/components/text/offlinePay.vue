<template>
  <div class="bggray">
  	<titleHead :fixed="true"></titleHead> 
    <p class="fs18 text-center margin-top-md">《转账信息及注意事项》</p>
    <div class="text-content">
    	<p>一、对公账户</p>
    	<p>开户行：工商银行惠州东方威尼斯支行</p>
    	<p>账号：2008 0222 0920 0036 227</p>
    	<p>户名：惠州市中威酒业有限公司</p>
    </div>
    <div class="text-content">
    	<p>二、中威收到您的转账后，将为您的中威钱包充值同等金额，使用中威钱包支付订单，完成交易。</p>
    </div>
    <div class="text-content">
    	<p>三、转账时请在备注中填写自己的中威账号和订单编号以便及时为您充值</p>
    </div>
    <div class="text-content">
    	<p>备注：如有疑问或查询转账结果请联系客服</p>
    </div>
    <footer class="footerFixed">
    	<a :href="`tel:${servicePhone}`"><yd-button class="sky-btn-orange" size="large" type="hollow"><i class="iconfont icon-hebingxingzhuang margin-right-sm"></i>拨打客服电话</yd-button></a>
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
      
    }
  },
  computed: {
      
  },
  methods: {
  	
  },
  mounted() {
     
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
 .text-content {
 	margin-top: .4rem;
 	padding-left: .6rem;
 	padding-right:.6rem;
 	p{
 		line-height: .6rem;
 	}
 }
</style>

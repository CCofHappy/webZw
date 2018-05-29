<!-- 保证金相关的文本 -->
<template>
  <div class="tipsBox">
      <h1 class="fs18">温馨提示</h1>
      <p class="tip">中威网收取成交价的5%作为平台费</p>
      <p class="tip">本拍卖网站所有拍品均经过本公司专家小组审核。但由于老酒的特殊性，受保存条件、批次等诸多因素的影响，部分产品可能存在瑕疵或争议，请竞拍谨慎出价，参与出价即默认该产品不存在争议，一经拍出概不退换，请悉知。</p>
      <p class="tip">竞拍成交后，如果因运输不当造成的破损，中威网承担全部损失。因为酒的特殊性，运输过程中可能会造成轻微漏酒，属正常现象，漏酒在5%以内，中威网不承担责任，超出5%时，客户有权退货。</p>
    </div>
</template>

<script>

export default {
  components: {
      
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
 .tipsBox {
  margin-top: .4rem;
  padding: .4rem .2rem;
  background: #F1F1F1;
  .tip {
    position: relative;
    padding-left: .4rem;
    margin-top:.2rem;
    color: #585858;
    font-size: .28rem;
    &:before {
      position:absolute;
      content: '●';
      left:.1rem;
      color: #969696;
    }
  }
 }
</style>

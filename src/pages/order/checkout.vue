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
                  <span class="pull-left">张三</span>
                  <span class="pull-right margin-top-xs">15018084533</span>
                </p>
                <p class="breakWord margin-top-xs">
                  广东省惠州市惠城区下角东路910文化创意园6栋2楼中威网
                </p>
                <i class="iconfont icon-Slicex13 fs12"></i>
              </div>
          </yd-cell-item>
      </yd-cell-group>

      <yd-cell-group>
          <yd-cell-item>
              <span slot="left"><span class="fw600">发票</span></span>
              <span slot="right">不开发票<i class="iconfont icon-Slicex13 margin-left-md gray fs12"></i></span>
          </yd-cell-item>
      </yd-cell-group>

       <yd-cell-group>
          <yd-cell-item>
              <span slot="left" class="fw600">4件商品</span>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix">
                <img class="leftImg" src="@/assets/default/jiu.jpg">
                <div class="rightText">
                  <p class="textfir" style="width: 5.5rem;">波特伦25年 1976-2001伦25年 1976-2001伦25年 1976-2001艾伦25年 1976-2001 道格拉斯·兰恩</p>
                  <p class="margin-top-sm">成交价：￥ 33000</p>
                </div>
              </div>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix">
                <img class="leftImg" src="@/assets/default/jiu.jpg">
                <div class="rightText">
                  <p class="textfir" style="width: 5.5rem;">波特伦25年 1976-2001伦25年 1976-2001伦25年 1976-2001艾伦25年 1976-2001 道格拉斯·兰恩</p>
                  <p class="margin-top-sm">成交价：￥ 33000</p>
                </div>
              </div>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix">
                <img class="leftImg" src="@/assets/default/jiu.jpg">
                <div class="rightText">
                  <p class="textfir" style="width: 5.5rem;">波特伦25年 1976-2001伦25年 1976-2001伦25年 1976-2001艾伦25年 1976-2001 道格拉斯·兰恩</p>
                  <p class="margin-top-sm">成交价：￥ 33000</p>
                </div>
              </div>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix">
                <img class="leftImg" src="@/assets/default/jiu.jpg">
                <div class="rightText">
                  <p class="textfir" style="width: 5.5rem;">波特伦25年 1976-2001伦25年 1976-2001伦25年 1976-2001艾伦25年 1976-2001 道格拉斯·兰恩</p>
                  <p class="margin-top-sm">成交价：￥ 33000</p>
                </div>
              </div>
          </yd-cell-item>
          <yd-cell-item class="widthRich">
              <div slot="left" class="position clearfix fs12" style="padding-right: .2rem;">
                <p>
                  <span>商品总额</span>
                  <span class="pull-right">￥60000</span>
                </p>
                <p class="margin-top-sm">
                  <span>保证金</span>
                  <span class="pull-right">－ ¥ 3000</span>
                </p>
                <p class="margin-top-sm margin-bottom-sm">
                  <span>商品总额</span>
                  <span class="pull-right">＋ ¥ 3000</span>
                </p>
              </div>
          </yd-cell-item>
      </yd-cell-group>

    </div>
    
   


    <!-- 结算底部 -->
    <footer class="footFixed">
      <div class="fs16">
        <span class="padding-sm margin-top-xs pull-left">应付金额：<span class="red fw600">￥66666</span></span>
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
        // customerSeq:Cookie.get('userSeq'),
        customerSeq:990512,
        deliveryAddrSeq:'',
        snapshotSeqArray: [this.$route.params.Sseq]
      }
    }
  },
  computed: {
      
  },
  methods: {
  	 submit(){}
      
  },
  mounted() {
       this.api.paySnapshot(this.postData)
       .then((res) => {

       })
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>

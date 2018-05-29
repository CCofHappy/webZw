<!-- 私洽弹出框 -->
<template>
  <div>
    <yd-popup class="padding-sm" v-model="negotiatePopup" position="center" width="84%" :close-on-masker="false">
          <div class="bgwhite padding-sm padding-bottom-md padding-top-md">
            <h2 class="fs18 text-center">私洽</h2>
            <div class="cl-box cl-box-bottom">
              <div class="cl-row">
                <div class="cl-td">
                  <img :src="negotiateData.auctionGoodsIcon" style="width: 1rem;">
                </div>
                <div class="cl-td ">
                  <p class="fs10 margin-top-xs">{{negotiateData.auctionGoodsEName ? negotiateData.auctionGoodsEName : 'EName'}}</p>
                  <p class="fs12 margin-top-xs">{{negotiateData.auctionGoodsName}}</p>
                  <p class="fs12 margin-top-xs" v-if="negotiateData.state == 4">成交价：<span class="fred">￥{{negotiateData.currPrice}}</span></p>
                  <p class="fs12 margin-top-xs" v-if="negotiateData.state == 5">成交价：<span class="fred">流拍</span></p>
                </div>
              </div>
            </div>
            <yd-radio-group v-model="type"  class="cl-box cl-box-bottom">
              <div class="cl-row" @click="type = 0">
                <div class="cl-td">
                  <p>求购</p>
                </div>
                <div class="cl-td text-right">
                  <yd-radio val="0">&nbsp;</yd-radio>
                </div>
              </div>
              <div class="cl-row" @click="type = 1">
                <div class="cl-td">
                  <p>出手</p>
                </div>
                <div class="cl-td text-right">
                  <yd-radio val="1">&nbsp;</yd-radio>
                </div>
              </div>
            </yd-radio-group>
            <div class="cl-box cl-box-bottom">
                <div class="cl-row" v-if="type == 0">
                  <div class="cl-td padding-right-0">
                     出售价：
                  </div>
                  <div class="cl-td padding-left-0">
                    <div class="inputBox">
                       <span class="pull-left">￥</span><yd-input type="number" :on-blur="blurPrice()" class="pull-left" v-model="price" :show-clear-icon="false"></yd-input>
                    </div>
                  </div>
                </div>
                <div class="cl-row" v-if="type == 1">
                  <div class="cl-td padding-right-0">
                     收购价：
                  </div>
                  <div class="cl-td padding-left-0">
                    <div class="inputBox">
                       <span class="pull-left">￥</span><yd-input type="number" :on-blur="blurPrice()" class="pull-left" v-model="price" :show-clear-icon="false"></yd-input>
                    </div>
                  </div>
                </div>
                <div class="cl-row" v-if="type != null">
                  <div class="cl-td">
                     数量：
                  </div>
                  <div class="cl-td text-right">
                     <yd-spinner  min="1" v-model="number"></yd-spinner>
                  </div>
                </div>
            </div>
            <p class="padding-sm fs12 gray">
              如有其它客户同意私洽，我们将电话联络您。中威网将按拍卖手续费收取佣金。
            </p>
             <yd-button type="primary" @click.native="postNegotiate" class="sky-btn sky-btn-orange sky-btn-md margin-top-md">确定</yd-button>
        </div>
      <i class="iconfont icon-cuowu closeIcon"  @click="setNegotiatePopup(false)"></i>
    </yd-popup>
  </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
export default {
  props:[''],
 
  components: {
        // headNav
    },
  data () {
    return {
      userSeq:parseInt(Cookie.get('userSeq')),
      type:null,
      number:1,
      price:0,
    }
  },
  computed: {
    ...mapState({
      negotiatePopup: state => state.Data.negotiatePopup,
      negotiateData: state => state.Data.negotiateData,
      // 如果是成交了就返回成交价，如果流拍了，默认返回1，后面要改动再调整（无敌坑，详情没有返回成交价，现在用的当前价加上状态来取代）
 
    })
  },
  methods: {
    ...mapMutations([
       'setNegotiateData',
       'setNegotiatePopup'
    ]),
  // 私洽
  postNegotiate() {
         let postData = {
          auctionGoodsSeq:this.negotiateData.auctionGoodsSeq,
          customerSeq:this.userSeq,
          number:this.number,
          price:this.price,
          type:this.type
         }
       this.api.insertAuctionGoodsNegotiate(postData)
       .then((res) => {
          if(res.state){
            this.setNegotiatePopup(false);
             this.$dialog.toast({
                mes: '私洽成功',
                timeout: 1500,
                icon: 'success'
            });
            setTimeout(()=> {window.location.reload()},1000)
          }
          console.log(res)
       })
    },
    // 价格不能以0开头
    blurPrice(){
      var numArr = this.price.split('');
      if(numArr[0] == 0){
        this.$nextTick(function(){
           this.price = this.price.slice(1,numArr.length)
        })
      }
    }
  },
  mounted() {
     
  },
  watch: {
    // 每次关闭打开弹窗都重置初始数据
    negotiatePopup(){
      this.type =null;
      this.number = 1;
    },
    // 更新价格
    negotiateData() {
      this.price = this.negotiateData.currPrice;
    },

  }
}
</script>

<style scoped>

</style>

<!-- 叫价选项卡组件 -->
<template>
  <div>
   <yd-popup class="popupBox" v-model="biddenPopup" position="bottom" height="7.28rem" :close-on-masker="false">
        <yd-tab v-model="tab" class="biddenTab" active-color="#272727">
            <yd-tab-panel label="心理价">
                <yd-spinner :min="currPrice + unitBidden*2" :unit="unitBidden" v-model="biddenMax"></yd-spinner>
                <span class="xtext">成功设置心理价后将自动出价：¥ {{currPrice + unitBidden}}</span>
                <div class="biddenText">
                    <div class="tr">
                        <img :src="biddenImg">
                        <span class="padding-left-md textfir">{{biddenName}}</span>
                    </div>
                    <div class="tr">
                        <span class="pull-left">当前价：{{currPrice}}</span>
                        <span class="pull-right">加价幅度：{{unitBidden}}</span>
                    </div>
                </div>
                <yd-button type="primary" @click.native="postBidden(2)" class="sky-btn sky-btn-orange">设置心理价</yd-button>
            </yd-tab-panel>

            <yd-tab-panel label="自由出价">
                <yd-spinner :min="currPrice + unitBidden" :unit="unitBidden" v-model="biddenIng"></yd-spinner>
                <div class="biddenText">
                    <div class="tr">
                        <img :src="biddenImg">
                        <span class="padding-left-md textfir">{{biddenName}}</span>
                    </div>
                    <div class="tr">
                        <span class="pull-left">当前价：{{currPrice}}</span>
                        <span class="pull-right">加价幅度：{{unitBidden}}</span>
                    </div>
                </div>
                <yd-button type="primary" @click.native="postBidden(1)" class="sky-btn sky-btn-orange">确认出价</yd-button>
            </yd-tab-panel>
        </yd-tab>
        <!--关于弹出框按钮 -->
        <div class="closePopup" @click="setBiddenPopup(false)">X</div>
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
      tab:1,
      biddenMax:1,     //默认心理出价
      biddenIng:1,     //默认自由出价
      userSeq:parseInt(Cookie.get('userSeq')),
    }
  },
  computed: {
    ...mapState({
      biddenPopup: state => state.Data.biddenPopup,
      biddenData: state => state.Data.biddenData,
      biddenName:state => state.Data.biddenData.auctionGoodsName || ' ',     //拍品名字
      biddenImg:state => state.Data.biddenData.auctionGoodsIcon || ' ',      //拍品图片
      currPrice:state => parseInt(state.Data.biddenData.lastPrice) || 1,               //当前价
      unitBidden:state => parseInt(state.Data.biddenData.jiaJiaStep) || 1,            //加价幅度
      auctionGoodsSeq:state => state.Data.biddenData.auctionGoodsSeq || 1,          //拍品序号
      auctionSessionSeq:state => state.Data.biddenData.auctionSessionSeq || 1,    //拍场序号
      signNo:state => state.Data.biddenData.signNo || 1,    //拍卖者编号
    })
  },
  methods: {
    ...mapMutations([
       'setBiddenData',
       'setBiddenPopup'
    ]),
  // 自由出价   type==1 自由出价，type==2 设置心理价
  postBidden(type) {
        let postData;
        if(type == 1) {
           postData = {
                auctionGoodsSeq: this.auctionGoodsSeq,
                auctionSessionSeq: this.auctionSessionSeq,
                customerSeq: this.userSeq,
                price:this.biddenIng,
                highestPrice:0,
                signNo:this.signNo,
                offerType:"0"
            }
        }else {
            postData = {
                auctionGoodsSeq: this.auctionGoodsSeq,
                auctionSessionSeq: this.auctionSessionSeq,
                customerSeq: this.userSeq,
                price:this.currPrice + this.unitBidden,
                highestPrice:this.biddenMax,
                signNo:this.signNo,
                offerType:"0"
            }
        }
        this.api.raisePrice(postData)
        .then((res) => {
          if(res.state){
                this.$dialog.toast({mes: res.message, timeout: 1000});
                this.$emit('myEvent')
            }else {
                this.$dialog.toast({mes: res.message, timeout: 1000});
            }
            this.setBiddenPopup(false)
        })
    },
  },
  mounted() {
     
  },
  watch: {
    // 更新默认出价
    biddenData() {
       this.biddenMax = this.currPrice + this.unitBidden*2
       this.biddenIng = this.currPrice + this.unitBidden
    }
  }
}
</script>

<style scoped>
 .popupBox {
  position: relative;
 }
 .closePopup {
  position: absolute;
  right: .2rem;
  top: .2rem;
 }
</style>

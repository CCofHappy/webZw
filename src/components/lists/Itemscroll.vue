 <template>
  <div>
    <router-link :to="{name:'goodsDetail',params:{Gseq: `${item.auctionGoodsSeq}`, Sseq: `${item.auctionSessionSeq}`}}">
        <yd-list-item>
            <div slot="img" class="imgIcon">
                <img :src="item.auctionGoodsIcon">
                <!-- <i class="iconfont icon-mall red"></i> -->
                <div v-if="item.state == 3">
                    <img v-if="item.recordState == 1 && item.myPrice" class="iconImg" src="@/assets/state/ahead.png">
                    <img v-if="item.recordState == 0 && item.myPrice" class="iconImg" src="@/assets/state/out.png">
                    <img v-if="item.offerState == 0 && item.myPrice" class="iconImg" src="@/assets/state/futility.png">
                </div>
            </div>
            <span slot="title">
                <b>{{item.auctionGoodsEName ? item.auctionGoodsEName : 'KARRIZAWA VINTAGE 1983 SINGLE CASK MALT WHISKY'}}</b>
            </span>
            <div slot="other" class="goodsname">
                <yd-list-other class="text-left fblack">
                    <span class="text2row fs14">{{item.auctionGoodsName}}</span>
                </yd-list-other>
                <!-- 拍品介绍，历史列表不渲染 -->
                <div class="margin-top-xs" v-if="item.state <= 3 || $route.name == 'pick'">
                     <yd-list-other class="text-left">
                        <div class="flex fblack">
                            <span class="flex-1"><i class="bhicon margin-right-xs"></i>{{item.auctionGoodsCode}}</span>
                            <span class="flex-1"><i class="qpicon margin-right-xs"></i>￥{{item.qiPaiJia}}</span>
                        </div>
                    </yd-list-other>
                    <yd-list-other class="text-left">
                        <div class="flex fblack">
                            <span class="flex-1"><i class="jjicon margin-right-xs"></i>￥{{item.jiaJiaStep}}</span>
                            <span class="flex-1"><i class="ygicon margin-right-xs"></i>￥{{item.qiPaiJia}}</span>
                        </div>
                    </yd-list-other>
                </div>

                <yd-list-other class="text-left fblack fs12 margin-bottom-xs">
                    <p v-if="item.state <= 2">
                        <span>起拍价：</span> 
                        <span class="priceNum">￥{{item.qiPaiJia}}</span>
                    </p>
                    <p v-if="item.state == 3">
                        <span>当前价：</span> 
                        <span class="priceNum">￥{{item.currPrice}}</span>
                    </p>
                    <p v-if="item.state == 4">
                        <span>成交价：</span> 
                        <span class="priceNum">￥{{item.currPrice}}</span>
                        <!-- 含佣icon，只有历史拍卖列表才有 -->
                     <!--    <i class="hyicon margin-left-sm text-top"></i> -->
                    </p>
                    <p v-if="item.state == 5"><span>成交价：</span> 流拍</p>
                </yd-list-other>
            </div>
            <!-- 私洽按钮组（只有历史拍卖列表才有） -->
            <yd-list-other v-if="item.state > 3 && $route.name != 'pick'" slot="other" class="sqBtn">
                <yd-button class="sky-btn sky-btn-orange" v-if="item.isNegotiate == 0" type="primary" @click.native="negotiate($event)">私洽</yd-button>
                <yd-button class="sky-btn" type="hollow" v-else bgcolor="#F1F1F1" >已私洽</yd-button>
            </yd-list-other>
        </yd-list-item>
    </router-link>

        <!-- item.state <= 3 && $route.name != 'pick' 历史拍品页和饮用精选是不需要显示以下模块的 -->
        <!-- item.customerSeq != userSeq  用于判断当前拍品是否当前用户送拍的，如果是当前用户送拍的不渲染以下的所有功能 -->
         <div class="cl-box"  v-if="item.state <= 3 && $route.name != 'pick' && item.customerSeq != userSeq" style="margin-bottom: -.4rem;border-top:1px solid #F2F2F2">
             <div class="cl-row">
                <!-- 当前拍卖详情，只有正在拍卖中才显示 -->
                 <div class="cl-td text-left padding-left-sm fs12" v-if="item.state == 3">
                      <p v-if="item.bondState == 1">
                        <span>我的出价：{{item.myPrice ? `￥${item.myPrice}` : '未出价'}}</span>
                        <span v-if="item.userHighestPrice" class="margin-left-lg">
                            心理价：{{item.userHighestPrice !=0 ? `￥${item.userHighestPrice}` : '未设置'}}
                        </span>
                     </p>
                     <p class="margin-top-xs fred" v-if="item.delay == 1">
                         <countdownb :endDate="item.endTime" :serverTime="serverTime"></countdownb>
                     </p>
                 </div>
                 <!-- 
                 出价按钮只有在正在热拍,并且交了保证金的情况下才会出现 
                 去交保证金按钮,只有在预展中或者热拍中并且没有没保证金的情况下才会出现  
                 state,拍品状态  bondState是否交过保证金（1，交 2.未交）
                 -->
                 <div class="cl-td text-right padding-right-sm">
                     <yd-button v-if="item.state == 3 && item.bondState == 1" class="sky-btn sky-btn-orange" style="width:1.4rem;" type="primary" @click.native="bidden">出价</yd-button>  
                     <yd-button v-if="item.state == 2 && item.bondState == 1" class="sky-btn sky-btn-orange" type="primary">已交保证金</yd-button>  
                     <yd-button v-if="item.state <= 3 && item.bondState == 0" class="sky-btn sky-btn-orange" type="primary" @click.native="goPayBoon()">去交保证金：￥{{item.bond}}</yd-button>  
                </div>
             </div>
         </div>
     
  </div>
</template>

<script>
import countdownb from '@/components/countdown/countdown-b.vue'    
import { mapMutations } from 'vuex'
export default {
    props:['item','serverTime'],
    components: {
        countdownb
    },
    data() {
        return {
            userSeq:parseInt(Cookie.get('userSeq')),
        }
    },
    computed: {
      
   },
    methods: {
        ...mapMutations([
           'setBiddenData',
           'setBiddenPopup',
           'setNegotiateData',
           'setNegotiatePopup',
        ]),
        // 出价弹出框
        bidden(){
        	this.api.getHighestPrice({
        		 "auctionGoodsSeq":this.item.auctionGoodsSeq,
                 "auctionSessionSeq":this.item.auctionSessionSeq,
                 "customerSeq":this.userSeq
        	})
        	.then((res) => {
        		this.setBiddenData(res.data);
            	this.setBiddenPopup(true);
        	})
            
        },
        
         // 去交保证金
        goPayBoon() {
            // 把支付前地址存起来，用于三方支付完之后跳转
            this.$localStorage.set('payUrl',window.location.href)
            this.$router.replace({
                name:'boonPay',
                query:{
                    sessionSeq:this.item.auctionSessionSeq,
                    goodsSeq:this.item.auctionGoodsSeq
                }
            })
        },
        // 私洽弹出框
        negotiate(event) {
            event.cancelBubble = true;   //阻止冒泡
            this.setNegotiateData(this.item);
            this.setNegotiatePopup(true);
        }
    },
    mounted(){
       // console.log(this.item)
    }
}
</script>
 
<style lang="css" scoped>
.goodsname {
    min-height: 1.4rem;
    vertical-align: top;
}
.cl-td {
    height: 1rem;
}
</style>
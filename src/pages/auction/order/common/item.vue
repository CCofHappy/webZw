<!-- 
tab有父组件传进来的
0-待付款
1-待收货
2-已完成
3-违约单
 -->
<template>
    <div>
      <div class="cl-box cl-box-bottom"  v-if="tab >= 1 && tab != 3">
         <div class="cl-row">
          <div class="cl-td">
            <p class="fw600">订单号：{{item.orderNumber}}</p>
          </div>
          <div class="cl-td text-right">
             <span v-show="tab == 1" class="fred">
              {{item.state == 1 ? '待发货' : '待收货'}}
             </span>
             <span v-show="tab == 2" class="fred">已完成</span>
          </div>
        </div>
      </div>
        <div class="cl-box cl-box-bottom">
        <div class="cl-row" v-for="child,key in item.lists">
          <div class="cl-td goods">
             <img v-if="child.auctionGoodsIcon" :src="child.auctionGoodsIcon">
             <img v-else src="@/assets/default/jiu.jpg">
          </div>
          <div class="cl-td text fs12 padding-right-xs nowrap">
             <p class="textfir" style="width:4.6rem;">{{child.auctionGoodsEname}}</p>
             <div class="flex margin-top-xs fgray">
                <div class="flex-1">净含量：{{child.jingHangLiang}}ml</div>
                <div class="flex-1">酒精度：{{child.jiuJingDu}}%vol</div>
             </div>
             <div class="flex margin-top-xs fgray">
                <div class="flex-1">拍品编号：{{child.auctionGoodsCode}}</div>
                <div class="flex-1">起拍价：￥{{child.qiPaiJia}}</div>
             </div>
             <p class="margin-top-xs">成交价：<span class="fs16 red fs600">￥{{child.finalPrice}}</span></p>
          </div>
        </div>
      </div>
      <div class="cl-box cl-box-padding" v-if="tab < 3">
         <div class="cl-row">
          <div class="cl-td padding-sm">
            <div v-show="tab == 0" class="fred">
              <!-- 这里的倒计时暂时没做，如果后期接口能够提供时间差就直接替换，不能的话就再封装 -->
            剩余 <yd-countdown :time="166666" timetype="second"></yd-countdown>
            </div>
            <div class="text-right" v-if="tab == 1 || tab == 2">
              <yd-button class="sky-btn sky-btn-gray" type="hollow" @click.native="Inquiry(item.orderSeq)">查看物流</yd-button>
              <yd-button class="sky-btn sky-btn-fred"  v-if="item.state == 2" type="hollow">确认收货</yd-button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
// import headNav from '@/components/common/head'
export default {
   props:['item','tab'],
  components: {
        // headNav
    },
  data () {
    return {
       
    }
  },
  computed: {
      
  },
  methods: {
   Inquiry(Oseq){
   	this.$router.push({
   		name: 'logistics',
   		params:{
   			'Oseq':Oseq
   		}
   	})
   }
  },
  mounted() {
  
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style lang="less">
 
 
</style>

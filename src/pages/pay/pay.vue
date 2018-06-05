<!--
	所有支付页面都公用这一个page
	所有方法都公用
	不同点：（详细使用看mounted里面的switch，主要通过路由name来判断是哪种支付页面（保证金支付页面，拍卖订单支付页面，商城订单支付页面，帖子支付订单页面等））
	1.入参       
	2.初始化数据
-->



<template>
  <div class="bggray">
    <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
    <div class="padding-sm">
    
    	<!--保证金===========start-->
      <yd-radio-group v-if="$route.name == 'boonPay'" v-model="postData.payType" class="cl-box cl-box-border">
        <div class="cl-row" @click="postData.payType = 101">
          <div class="cl-td">
            <p>全场保证金：<span class="red">￥{{boonData.auctionSessionBond}}</span></p>
            <p class="gray margin-top-xs fs12">针对全场拍品有效</p>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="101">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="postData.payType = 102">
          <div class="cl-td">
            <p>单品保证金：<span class="red">￥{{boonData.auctionGoodsBond}}</span></p>
            <p class="gray margin-top-xs fs12">针对单件拍品有效</p>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="102">&nbsp;</yd-radio>
          </div>
        </div>
      </yd-radio-group>
			<!--保证金===========end-->
			
			<!--拍卖订单支付===========start-->
				<div class="cl-box cl-box-border" v-if="$route.name == 'salePay'">
	    		<div class="cl-row">
	          <div class="cl-td">
	            <p>订单金额：</p>
	          </div>
	          <div class="cl-td text-right">
	            <span class="red">￥{{postData.totalFee}}</span>
	          </div>
	         </div>
	    	</div>
			
			<!--拍卖订单支付===========end-->
			
			
			
			
      <yd-radio-group v-model="pType" class="cl-box cl-box-border margin-top-sm">
        <div class="cl-row">
          <div class="cl-td">
            <b>支付方式</b>
          </div>
          <div class="cl-td">
          </div>
        </div>
        <div class="cl-row" @click="pType = 1">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payzhongwei.png"><span class="margin-left-sm margin-top-xs pull-left">中威钱包<span class="gray margin-left-md fs12">极速安全支付</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="1">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="pType = 2">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/weixin.png"><span class="margin-left-sm margin-top-xs pull-left">微信<span class="gray margin-left-md fs12">微信专属服务</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="2">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="pType = 3">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payzhifubao.png"><span class="margin-left-sm margin-top-xs pull-left">支付宝<span class="gray margin-left-md fs12">支付宝专属服务</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="3">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="cl-row" @click="pType = 4">
          <div class="cl-td">
            <img class="payTypeImg pull-left" src="@/assets/pay/payyinlian.png"><span class="margin-left-sm margin-top-xs pull-left">银联支付<span class="gray margin-left-md fs12">中国银联在线支付</span></span>
          </div>
          <div class="cl-td text-right">
            <yd-radio val="4">&nbsp;</yd-radio>
          </div>
        </div>
     </yd-radio-group>
     
     
     <!--威币抵扣，只有支付保证金页面才有-->
    <div class="cl-box cl-box-padding bgwhite margin-top-sm" v-if="$route.name == 'boonPay'">
      <div class="cl-row">
        <div class="cl-td">
          <span>威币抵扣<span class="margin-left-md">剩余威币：100</span></span> 
        </div>
        <div class="cl-td text-right">
          <yd-switch color="#CD733B" class="skySwitch" v-model="wbSwitch"></yd-switch>
        </div>
      </div>
    </div>
    <div class="text-right bgwhite padding-sm fadeIn05s" v-show="wbSwitch">
      抵扣数量<input class="sky-inp margin-left-sm" style="width: 1.8rem;" type="number" v-model="boonData.wbBalance">
    </div>
 
		<!--线下支付-->
			<router-link :to="{name:'offlinePay'}" class="cl-box cl-box-border margin-top-sm" v-if="$route.name == 'salePay'">
    		<div class="cl-row">
          <div class="cl-td">
            <p>线下支付</p>
          </div>
          <div class="cl-td text-right">
            <i class="iconfont icon-Slicex13 fs12 gray"></i>
          </div>
         </div>
    	</router-link>
		
		

      <div class="margin-top-md margin-left-xs">
         <yd-checkbox class="padding-right-0" color="#C83A03" v-model="checkbox">竞拍需同意中威网</yd-checkbox>
         <router-link class="ablue" :to="{ name: 'auctionRule'}">《拍卖规则》</router-link>
         <aboutBoon class="gray fs12 margin-top-md"></aboutBoon>
         <div class="margin-top-md">
           <yd-button class="sky-btn-orange sky-btn-big fs16" @click.native="pay()" type="primary">报名，支付保证金</yd-button>
         </div>
      </div>
    </div>
    <yd-keyboard title="中威网安全键盘" v-model="showKeyboard" :callback="keyboardCb" ref="keyboard"></yd-keyboard>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import aboutBoon from '@/components/text/aboutBoon.vue'
export default {
  name: 'pay',
  components: {
        titleHead,
        aboutBoon
    },
  data () {
    // 接口疑问：payType才是保证金类型    101---全场保证金   102---单品保证金
    return {
      pType:1,
      //由于payType才是保证金类型，只能重新声明一个变量来作为判断支付类型    1---中威钱包支付，2---微信支付，3---支付宝支付，4---银联支付（还需结合路由name来判断是支付保证金还是支付订单）
      // 保证金页面初始化数据
      boonData:{
        auctionGoodsBond:null,
        auctionSessionBond:null,
      },
      //支付入参
      postData:{},
      //公用的付款价格，用于比较余额是否足够支付
      wbSwitch:false,      //是否使用威币抵扣
      showKeyboard:false,   //控制是否显示安全键盘（输入密码的）
      checkbox: true,     //判断是否勾选上同意
    }
  },
  computed: {
      payUrl() {
        return this.$localStorage.get('payUrl')
      }
  },
  methods: {
    // 支付动作
    async pay() {
     if(this.checkbox){
          // 先查询余额
          const query = await this.api.getBalance(Cookie.get('userSeq'))
          const balance = query.data[0].balance
          switch(this.pType){
            case 1 : 
            this.$dialog.confirm({
                title: '中威钱包支付',
                mes: `可用余额：￥${balance}`,
                opts: () => {
                  if(balance > this.postData.totalFee){
                    this.showKeyboard = true;
                  }else {
                    this.$dialog.toast({mes:'余额不足',time:2000})
                  }
                }
            });
            break;
            case 2 :
            // 微信支付
            break;
            case 3 :
            // 支付宝支付   (如果需要支付的保证金为0那就直接输入中威的支付密码就可以了，不用去触发支付宝支付)
              if(this.postData.totalFee<= 0){
                this.showKeyboard = true;
              }else {
                this.api.payment(this.postData)
                .then((res) => {
                  console.log(res);
                })
              }
            break;
            case 4 :
            // 银联支付（同支付宝一样）
              this.showKeyboard = true;
            break;
        }
         
     }else {
        this.$dialog.alert({mes:'是否同意中威网拍卖规则',time:2000})
     }

    },
    
  	// 支付保证金页面初始化数据
    boonPayData() {
      this.ajaxPost('app/auction/getBond',this.postData,(res) => {
          this.boonData = res.data;
          this.postData.totalFee = res.data.auctionSessionBond;    //默认是交全场保证金，所以这里是先全场保证金赋值给totalFee
      })
    },
    
    // 中威钱包支付  val---密码，
    walletPay(val) {
    	this.postData.passWord = val
      this.$dialog.loading.open('验证支付密码');
      this.api.walletPay(this.postData)
      .then((res) => {
        if(res.state){
          this.showKeyboard = false;
          this.$dialog.toast({mes:res.message,time:1000})
          setTimeout(()=> {
           		window.location.replace(this.payUrl)
          },1000)
        }else{
          this.$refs.keyboard.$emit('ydui.keyboard.error', res.message);
        }
         this.$dialog.loading.close();
      })
    },
    // 输入密码后的回调函数
    keyboardCb(val) {
    	 this.walletPay(md5(val));
    }
  },
  mounted() {
   
	 switch(this.$route.name){
	 	//进来如果是支付保证金页面
	    case 'boonPay' :
	      this.postData = {
	        auctionGoodsSeq:this.$route.query.goodsSeq,  //商品seq
	        auctionSessionSeq:this.$route.query.sessionSeq,  //拍场seq
	        customerSeq:Cookie.get('userSeq'),
	        totalFee:null,   
	        payType: 101,      //类型是：支付拍场保证金 101; 支付拍品保证金 102; 充值 103; 订单支付 104;
	        boonType: 2,      //boonType暂时不知道是什么鬼，反正写死为2,并不是保证金类型
	        fromUrl:this.payUrl    //支付成功后跳转的页面
	      }
	      this.boonPayData();    //保证金页面初始化数据
	    break;
	    //进来如果是订单支付页面
	    case 'salePay' :
	    	this.postData = JSON.parse(this.$localStorage.get('payOrder'))
	    	this.postData.fromUrl = this.payUrl
	    break;
	    
	  }
   console.log('进来的页面postData',this.postData)
  },
 
  watch: {
    // 监听支付保证金的类型   101全场，102单品
    postData : {
      handler(curVal,oldVal){
         if(this.postData.payType == 101){
          this.postData.totalFee = this.boonData.auctionSessionBond
         }
         if(this.postData.payType == 102){
           this.postData.totalFee = this.boonData.auctionGoodsBond
         }
　　　},
　　　deep:true
    }
  }
}
</script>

<style scoped>
 
</style>

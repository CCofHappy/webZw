<template>
  <div class="bggray">
    <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
    <div class="padding-sm">
      <yd-radio-group v-model="postData.payType" class="cl-box cl-box-border">
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
      
    <div class="cl-box cl-box-padding bgwhite margin-top-sm">
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
      抵扣数量<input class="sky-inp margin-left-sm" style="width: 1.8rem;" type="number" v-model="postData.wbBalance">
    </div>

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
      //由于payType才是保证金类型，只能重新声明一个变量来作为判断支付类型    1---中威钱包支付，2---支付宝支付，3---银联支付
      postData: {
        auctionGoodsSeq:this.$route.query.goodsSeq,  //商品seq
        auctionSessionSeq:this.$route.query.sessionSeq,  //拍场seq
        customerSeq:Cookie.get('userSeq'),
        totalFee:null,   
        payType: 101,      //类型是：支付拍场保证金 101; 支付拍品保证金 102; 充值 103; 订单支付 104;
        boonType: 2,      //boonType暂时不知道是什么鬼，反正写死为2,并不是保证金类型
      },
      // 如果是订单支付需要带一下参数，把postData，orderData两个对象合并起来就可以了【Object.assign()】
      orderData: {
         auctionGoodsSeqStr:'',   //支付订单的时候获取拍场下的拍品seq集合，用,分割
        auctionSessionSeqStr:'',//支付订单的时候获取拍场seq集合，用,分割，其实没什么意义的，主只要是要数量和auctionGoodsSeqStr对上，有多少个拍品这里就要有多少个拍场seq
        deliveryAddrSeq:null,    //收货地址seq
        invoiceSeq:null,        //发票seq
        wbBalance:0,            //威币
      },
      // 保证金页面初始化数据
      boonData:{
        auctionGoodsBond:null,
        auctionSessionBond:null,
      },
       //保证金的金额，增加了监听事件，当选择了全场的时候对应赋值全场保证金金额，选择了单品的时候赋值单品保证金金额
      wbSwitch:false,      //是否使用威币抵扣
      showKeyboard:false,   //控制是否显示安全键盘（输入密码的）
      checkbox: true,     //判断是否勾选上同意
    }
  },
  computed: {
      payUrl() {
        return this.$store.state.server.payUrl;
      }
  },
  methods: {


  	// 支付保证金页面初始化数据
    boonPayData() {
      this.ajaxPost('app/auction/getBond',this.postData,(res) => {
          this.boonData = res.data;
          this.postData.totalFee = res.data.auctionSessionBond;    //默认是交全场保证金，所以这里是先全场保证金赋值给totalFee
      })
    },

    // 中威钱包支付
    walletPay(val) {
      this.postData.passWord = val;
      this.$dialog.loading.open('验证支付密码');
      this.api.walletPay(this.postData)
      .then((res) => {
        if(res.state){
          this.showKeyboard = false;
          this.$dialog.toast({mes:res.message,time:2000})
          setTimeout(()=> {
            // this.$router.replace(`/detail/session/${this.auctionSessionSeq}`)
            this.$router.go(-1);
          },1000)
        }else{
          this.$refs.keyboard.$emit('ydui.keyboard.error', res.message);
        }
         this.$dialog.loading.close();
      })
    },
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
              if(this.postData.totalFee <= 0){
                this.showKeyboard = true;
              }else {
                // payUrl是从状态管理器里获取的，在进入支付页面之前存进去的
                this.postData.fromUrl = this.payUrl;
                console.log(this.postData)
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
    // 输入密码后的回调函数
    keyboardCb(val) {
      // pType判断是什么类型的支付对应触发不同类型的支付方法。
      switch(this.pType){
        case 1 :
        this.walletPay(md5(val))
        break;
        case 2 :
        // 微信支付,只有支付金额为0的才会进入这里的三方支付判断（如果不为0是跳到对应的三方支付）
        break;
        case 3 :
        // 支付宝支付
        break;
        case 4 :
        // 银联支付
        break;
      }
    }
  },
  mounted() {
    this.boonPayData()
  },
  watch: {
    // 监听支付保证金的类型   101全场，102单品
    postData : {
      handler(curVal,oldVal){
         if(this.postData.payType == 101){
          this.postData.totalFee = this.boonData.auctionSessionBond
         }else {
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

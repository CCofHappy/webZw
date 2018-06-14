<template>
  <div class="bggray">
      <yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
          <router-link :to="{name:'saleBreakOrder'}" slot="right">
         			 违约单
          </router-link>
      </yd-navbar>
      <yd-tab class="orderMenus" v-model="tab" active-color="#CC733D">
        <yd-tab-panel label="待付款">
          <yd-infinitescroll :callback="loadListDown" ref="ls0">
              <yd-radio-group v-model="pending" slot="list">
                <div v-for="item,key in postArray[0].list" class="bgwhite margin-bottom-sm">
                  <div class="cl-box cl-box-bottom" >
                   <div class="cl-row">
                    <div class="cl-td">
                      <yd-radio @click.native="choose(item)" color="#272727" :val="item.auctionSessionSeq" class="fw600">{{item.auctionSessionName}}</yd-radio>
                    </div>
                    <div class="cl-td text-right">
                       <span class="fred">待付款</span>
                    </div>
                  </div>
                </div>
                <itemOrder @validateOrder="getData" :key="key" :item="item" :tab="tab"></itemOrder>
              </div>
              </yd-radio-group>
              <!-- 数据全部加载完毕显示 -->
              <span  slot="doneTip">没有内容了~~</span>
              <!-- 加载中提示，不指定，将显示默认加载中图标 -->
              <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
          
        </yd-tab-panel>
        <yd-tab-panel label="待收货">
          <yd-infinitescroll :callback="loadListDown" ref="ls1">
                <itemOrder  slot="list" class="margin-bottom-sm bgwhite" v-for="item,key in postArray[1].list" :key="key" :item="item" :tab="tab"></itemOrder>
              <!-- 数据全部加载完毕显示 -->
              <span  slot="doneTip">没有内容了~~</span>
              <!-- 加载中提示，不指定，将显示默认加载中图标 -->
              <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
        </yd-tab-panel>
        <yd-tab-panel label="已完成">
          <yd-infinitescroll :callback="loadListDown" ref="ls2">
                <itemOrder  slot="list" class="margin-bottom-sm bgwhite"  v-for="item,key in postArray[2].list" :key="key" :item="item" :tab="tab"></itemOrder>
              <!-- 数据全部加载完毕显示 -->
              <span  slot="doneTip">没有内容了~~</span>
              <!-- 加载中提示，不指定，将显示默认加载中图标 -->
              <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
        </yd-tab-panel>
    </yd-tab>
    <!-- 结算底部 -->
    <footer class="footFixed padding-sm" v-show="tab == 0 && postArray[0].list.length != 0">
      <div class="pull-right fs16">
        总计：<span class="red fw600 margin-right-md">￥{{total}}</span><yd-button @click.native="goPay" class="sky-btn sky-btn-orange" type="primary">去付款</yd-button>
      </div>
    </footer>
  </div>
</template>

<script>
import itemOrder from './common/item'
import { mapMutations } from 'vuex'
export default {
 
  components: {
         itemOrder
    },
  data () {
    return {
      pending:null,     //勾选上的订单seq
      total:0,    //总计金额
      tab:0,
      postArray:[
        {
          post:{
            customerSeq:Cookie.get('userSeq'),
            page:1,
            rows:10,
            states:0
             // states:'1_2'
          },
          list:[]
        },
        {
          post:{
            customerSeq:Cookie.get('userSeq'),
            page:1,
            rows:10,
            states:'1_2'
          },
          list:[]
        },
        { 
          post:{
            customerSeq:Cookie.get('userSeq'),
            page:1,
            rows:10,
            states:3
          },
          list:[]
        }
      ],
      list:[]
    }
  },
  computed: {
      
  },
  methods: {
  	 ...mapMutations([
           'setPayUrl'
      ]),
  	  // 滚动加载
      loadListDown(tindex) {
          var tabIndex = tindex ? tindex : this.tab;
          this.api.findSnapshot(this.postArray[tabIndex].post)
           .then((res) => {
            if(res.state == 1){
              this.$store.dispatch('getServerTime')
              const _list = res.data.dataList ? res.data.dataList : [];
              this.postArray[tabIndex].list = [...this.postArray[tabIndex].list, ..._list];
              this.$nextTick(function () {
                setTimeout(()=>{this.Vloading = false;},500)
              });
              // 当最后一页的数据少于一页的数据或者页数等于后台返回的总页数时，就是全部加载完毕
              if (_list.length < this.postArray[tabIndex].post.rows || this.postArray[tabIndex].post.page >= res.data.pageCount) {
                  // 所有数据加载完毕
                  if(tabIndex == 0){
                    this.$refs.ls0.$emit('ydui.infinitescroll.loadedDone');
                  }
                  if(tabIndex == 1){
                    this.$refs.ls1.$emit('ydui.infinitescroll.loadedDone');
                  }
                  if(tabIndex == 2){
                    this.$refs.ls2.$emit('ydui.infinitescroll.loadedDone');
                  }
                  return;
              }
               if(tabIndex == 0){
                  this.$refs.ls0.$emit('ydui.infinitescroll.finishLoad');
                }
                if(tabIndex == 1){
                  this.$refs.ls1.$emit('ydui.infinitescroll.finishLoad');
                }
                if(tabIndex == 2){
                  this.$refs.ls2.$emit('ydui.infinitescroll.finishLoad');
                }
              this.postArray[tabIndex].post.page++;
            }
         })
        
      },
       
      choose(item){
        let price = 0;
        for(var i = 0; i < item.lists.length; i++){
            price += item.lists[i].finalPrice
        }
        this.total = price;
      },
      // 去支付----跳转到结算中心
      goPay() {
        if(this.pending == null){
          this.$dialog.toast({
            mes:'请勾选需要支付的拍品'
          })
          return false;
        }
        this.api.paymentCheck({'auctionSessionStr':this.pending})
        .then((res) => {
          if(res.state){
          	// 把支付前地址存起来，用于三方支付完之后跳转
          	this.local.set('payUrl',window.location.href);
            this.$router.replace({
            	name:'checkout',
            	params:{Sseq:this.pending}
            })
          }else {
            this.$dialog.toast({
              mes:res.message
            })
          }
        })
      },
      getData(){
      	this.loadListDown(0)
        this.loadListDown(1)
        this.loadListDown(2)
      }
  },
  mounted() {
      this.$nextTick(function(){
        this.getData()
      })
     this.$store.dispatch('getServerTime')
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style lang="less">
 .orderMenus {
  .yd-tab-nav-nomal {
    position: fixed;
    top: 1rem;
    width: 100% !important;
    z-index: 99999;
  }
  .yd-tab-nav-item:not(:last-child):after {
    border:none;
  }
  .yd-tab-panel {
    margin-top: 2rem;
    background: none;
  }
  .yd-tab-nav .yd-tab-active:before{
      width: 20%;
      margin-left: -10%;
  }
  .goods {
    width: 28%;
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  .text {
    width: 72%;
  }
   
 }
 
</style>

<template>
	
	<div>
		<yd-navbar title="限时抢购" bgcolor="#F8F8F8" fontsize=".36rem" color="#282828" :fixed="true">
	        <!-- <a href="javascript:void(0)" slot="left">
	            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
	        </a> -->
	        <router-link :to="{name: 'mall'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	    </yd-navbar>
	    <yd-tab class="dayTab" v-model="tab">
          <div class="tabHeader flex">
            <span class="left flex-1" @click="tab = 0">已开抢</span>
            <span class="right flex-1" @click="tab = 1">4月40日开抢</span>
          </div>
          <yd-tab-panel :label="tabLabel[0]">
            <countdowna style="margin-top: .2rem; margin-left: .24rem;" :serverTime="serverTimeTest" :startDate="startDateTest" :endDate="endDateTest" :dateType="1"></countdowna>
            <yd-list theme="4">
            	<rush-to-purchase v-for="item,key in list" :key="key" :itemData="item" :purchaseType="true" @click.native="clickMallDetail"></rush-to-purchase>
	        </yd-list>
          </yd-tab-panel>
          <yd-tab-panel :label="tabLabel[1]">
          	<countdowna style="margin-top: .2rem; margin-left: .24rem;" :serverTime="serverTimeTest" :startDate="startDateTest" :endDate="endDateTest" :dateType="1"></countdowna>
          	<div style="height: 1px;width: 100%; background-color: #F2F2F2;"></div>
            <yd-list theme="4">
            	<rush-to-purchase v-for="item,key in list" :key="key" :itemData="item"></rush-to-purchase>
	        </yd-list>
          </yd-tab-panel>
           
        </yd-tab>
    	<!-- <div class="flex" style="color: white;">
    		<div class="flex-1 text-center" style="background-color: #CD733B; height: 1.4rem;">
    			<p style="font-size: .36rem;margin-top: .1rem; font-weight: 500;font-family: PingFangSC-Medium;">热抢好酒</p>
    			<p style="font-size: .24rem;">已开抢</p>
    		</div>
    		<div class="flex-1 text-center" style="background-color: #282828; height: 1.4rem;">
    			<p style="font-size: .36rem;margin-top: .1rem; font-weight: 700; line-height: .5rem;font-family: PingFangSC-Medium;">14 : 00</p>
    			<p style="font-size: .24rem;">4月40日开抢</p>
    		</div>
    	</div>
    	<countdowna style="margin-top: .2rem; margin-left: .24rem;" :serverTime="serverTimeTest" :startDate="startDateTest" :endDate="endDateTest" :dateType="1"></countdowna>
    	<yd-list theme="4">
          <yd-list-item v-for="item, key in list" :key="key">
              <img slot="img" :src="item.img">
              <span slot="title">{{item.title}}</span>
              <yd-list-other slot="other">
                  <div>
                      <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                      <span class="demo-list-del-price">¥{{item.w_price}}</span>
                      <yd-flexbox>
                          <yd-flexbox-item><yd-progressbar class="progress" type="line" :progress="progress" trail-width="8" stroke-width="8" trail-color="#FDB081"></yd-progressbar></yd-flexbox-item>
                          <div>&nbsp;&nbsp;&nbsp;</div>
                          <yd-flexbox-item class="flexbox-fontSize">剩余200件</yd-flexbox-item>
                      </yd-flexbox>
                      <yd-flexbox class="flexBottom">
                          <div class="discount">￥10000</div>
                          <yd-flexbox-item class="originalPrice">￥13000</yd-flexbox-item>
                      </yd-flexbox>
                      <yd-button class="performBtn" bgcolor="#282828" color="#FFF">马上抢</yd-button>
                  </div>
              </yd-list-other>
          </yd-list-item>
        </yd-list> -->
	</div>

</template>

<script>
	import commodityList from "@/components/lists/commodityList"
	import rushToPurchase from "@/components/lists/RushToPurchase"
	import countdowna from '@/components/countdown/countdown-a.vue'
	// import itemscroll from '@/components/lists/Itemscroll.vue'
	// import scrolLoading from '@/components/common/scrolLoading'
	export default {
		name: 'flashSale',
		data() {
			return {
				input1: '',
				addresses: ['苏格兰','日本','台湾','独立装瓶厂'],
				brands: ['MACALLAM 麦卡伦','KARUIZAWA 轻井泽','BRORA 布朗拉','ROSEBAK 罗斯班克','ARDBEG 阿贝','BALVENIE 百富','DALMORE 大摩','HAKUSHU 白州'],
		       serverTimeTest: 1111000000,
		       startDateTest: 1111100000,
		       endDateTest: 1111200000,
		       tab: 0,
		       tabLabel:['热抢好酒','14 : 00'],
				list: [
					{img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, subtitle: 89.36}
				]
			}
		},
		components: {
			commodityList,
			countdowna,
			// itemscroll,
			// scrolLoading,
			rushToPurchase
		},
		methods: {
			clickMallDetail() {
				this.$router.push({name: "mallDetails"});
			}
		}
	}
</script>


<style lang="less">

	// .yd-input {
	// 	width: auto;
	// }
	// .yd-btn-hollow {
	// 	background-color: transparent;
	// 	border: 0px;
	// }
	// .navbar-bottom-line-color:after {
	//   border-color: #F8F8F8;
	// }
	.dayTab {
	  position: relative;
	  margin-top: 1rem;
	  background-color: #F2F2F2;
	  .yd-tab-nav{
	    position: fixed;
	    top: 1rem;
	    z-index: 9;
	    width: 100% !important;
	  }
	  .yd-tab-panel {
	    margin-top: 1.25rem;
	  }
	  .yd-tab-nav .yd-tab-active:before{
	    background: none;
	  }
	  .yd-tab-nav:after,.yd-tab-nav-item:not(:last-child):after{
	    border:none;
	  }
	  .yd-tab-nav-item {
	    color: #FFFFFF;
	    background: #272727;
	    transition: all .2s cubic-bezier(.55, 0, .1, 1);
	  }
	  .yd-tab-nav-item.yd-tab-active {
	    background: #CC723C;
	    /*transition: all .2s cubic-bezier(.55, 0, .1, 1);*/
	  }
	  .yd-tab-nav-item>a{
	    position: relative;
	    height: 1rem;
	    line-height: 0.7rem;
	    font-size: 0.36rem;
	    /*font-weight: 600;*/
	  }
	  .yd-tab-nav-item.yd-tab-active a:after{
	    position: absolute;
	    bottom: -6px;
	    content: " ";
	    /*朝下的三角形*/  
	    width:0;  
	    height:0;
	    left: 50%;  
	    margin-left: -3px;
	    overflow:hidden; 
	    border-left:6px solid transparent;  
	    border-right:6px solid transparent;  
	    border-top:6px solid #CB713C;  
	  }

	  .tabHeader{
	    position: fixed;
	    top: 1.6rem;
	    z-index: 9;
	    width: 100%;
	    color: #FFFFFF;
	    text-align: center;
	    font-size: 0.24rem;
	  }
	 }
</style>



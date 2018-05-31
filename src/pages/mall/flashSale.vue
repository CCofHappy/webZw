<template>
	
	<div>
		<yd-navbar title="限时抢购" bgcolor="#F8F8F8" fontsize=".36rem" color="#282828">
	        <router-link :to="{name:'mall'}" slot="left">
	            <yd-navbar-back-icon></yd-navbar-back-icon>
	        </router-link>
	    </yd-navbar>
    	<div class="flex" style="color: white;">
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
      </yd-list>
	</div>

</template>

<script>
	import commodityList from "@/components/lists/commodityList"
	import countdowna from '@/components/countdown/countdown-a.vue'
	export default {
		name: 'flashSale',
		data() {
			return {
				input1: '',
				addresses: ['苏格兰','日本','台湾','独立装瓶厂'],
				brands: ['MACALLAM 麦卡伦','KARUIZAWA 轻井泽','BRORA 布朗拉','ROSEBAK 罗斯班克','ARDBEG 阿贝','BALVENIE 百富','DALMORE 大摩','HAKUSHU 白州'],
		       serverTimeTest: 111100000,
		       startDateTest: 111110000,
		       endDateTest: 111120000,
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
			countdowna
		}
	}
</script>


<style scoped>

	.yd-input {
		width: auto;
	}
	.yd-btn-hollow {
		background-color: transparent;
		border: 0px;
	}
	.navbar-bottom-line-color:after {
	  border-color: #F8F8F8;
	}
</style>



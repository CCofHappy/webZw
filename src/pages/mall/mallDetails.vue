
<template>
	
	<div>
		<yd-navbar title="商品详情" bgcolor="#F8F8F8" color="#282828" :fixed="true">
	        <router-link :to="{name: 'flashSale'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	        <router-link to="#" slot="right">
	            <i class="iconfont icon-Slicex11"></i>
	        </router-link>
	        <router-link to="#" slot="right">
	            <i class="iconfont icon--me-7"></i>
	        </router-link>
	    </yd-navbar>
	    <div>
	    	<img src="//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg" style="width: 7.5rem; height: 7.5rem; margin-top: 1rem;">
	    </div>
	    <div class="marginTop02">
	    	<span class="discount">￥13000</span>
	    	<span class="originalPrice">￥15000</span>
	    	<button class="discountBtn">抢购价</button>
	    </div>
	    <div class="marginTop02">
	    	<div style="color: #282828; font-size: .36rem; margin-left: .24rem; font-family: PingFangSC-Medium;">
	    		KARUIZAWA 轻井泽 能 22年 1994-2016 #7640
	    	</div>
	    </div>
	    <div class="marginTop02" style="font-size: .24rem; color: #979797;">
	    	<span style="padding-left: .24rem;">运费：广东省内15元，省外25元，满300包邮</span>
	    	<span style="position: absolute; right: .24rem;">销量：0</span>
	    </div>
	    <div class="mallRemark">
			<yd-grids-group :rows="4" style="height: 2.36rem;" class="padding-right-lg">
		        <yd-grids-item v-for="item,key in mallInfoIconTitle" :key="key">
		        	<img slot="icon" :src="item.icon">
		            <span slot="text" class="fs12">{{item.infoTitle}}</span>
		        </yd-grids-item>
		    </yd-grids-group>
	        <i class="iconfont icon-Slicex13 iconRight" @click="clickMallRemark"></i>
	        
	    </div>
	    <div class="margin-top-xd" style="position: relative;">
	    	<span class="fs18 dgray padding-left-xm">商品信息</span>
	    	<i class="iconRight iconfont icon-Slicex13"></i>
	    </div>
	    <div class="flex-v mallInfoDiv">
	    	<div class="mallInfo backgroundColor">
	    		<span class="leftSpan">品牌：<span>阿贝/Ardbeg</span></span>
	    		<span class="rightSpan">酒精度：<span>45%</span></span>
	    	</div>
	    	<div class="mallInfo">
	    		<span class="leftSpan">类型：<span>单一麦芽威士忌</span></span>
	    		<span class="rightSpan">蒸馏厂：<span>班尼富</span></span>
	    	</div>
	    	<div class="mallInfo backgroundColor">
	    		<span class="leftSpan">原产地：<span>独立装瓶厂</span></span>
	    		<span class="rightSpan">蒸馏：<span>1991</span></span>
	    	</div>
	    </div>
	    <div class="margin-top-xd" style="margin-bottom: 1rem;">
	    	<span class="padding-left-xm fs18">商品详情</span>
	    	<div>
	    		<img src="//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg" style="width: 100%; height: 100%; padding: .44rem;">
	    	</div>
	    </div>
	    <!-- <div style="position: fixed; bottom: 0px; right: 0px; left: 0px;">
	    	
	    </div> -->
	    <footer class="detailsFooter">
	        <a href="javascript:void(0)">
	          <i class="iconfont icon-Slice4"></i>
	          <span>客服</span>
	        </a>
	        <a href="javascript:void(0)">
	          <!-- <i v-if="isNotFavorite == 1" class="iconfont icon-Slice1"></i> -->
	          <i class="iconfont icon-Slice2"></i>
	          <span>收藏</span>
	        </a>
	        <!-- <yd-button v-if="data.state == 3 && bondPayedOrNot == 1" class="sky-btn sky-btn-orange" @click.native="bidden" type="primary">立即出价</yd-button> -->
	        <!-- <yd-button v-if="data.state <= 3 && bondPayedOrNot == 0" class="sky-btn sky-btn-orange" @click.native="goPayBoon" type="primary">交保证金￥{{data.bond}}</yd-button> -->
	        <!-- <yd-button v-if="data.state == 2 && bondPayedOrNot == 1"  class="sky-btn sky-btn-orange" type="primary">已交保证金</yd-button> -->
	        <yd-button class="sky-btn sky-btn-orange" type="primary">立即购买</yd-button>
	        <!-- <yd-button v-if="data.state > 3 && data.isNegotiate == 1" class="sky-btn sky-btn-orange" type="primary">已洽谈</yd-button> -->
	      </footer>

		<!-- 底部弹出框 -->
		<yd-popup v-model="show2" position="bottom" height="60%">
            <div style="height: 1.48rem; background-color: #F8F8F8;">
            	<span style="">中威网服务</span>
            	<i class="iconfont icon-Slice4" style="position: absolute; right: .24rem;"></i>
            </div>
        </yd-popup>

	</div>	

</template>

<script>
	export default {
		data() {
			return {
				show2: false,
				mallInfoIconTitle: [
					{
						infoTitle: "正品保证",
						icon: "http://static.ydcss.com/ydui/img/logo.png"
					},
					{
						infoTitle: "破损包赔",
						icon: "http://static.ydcss.com/ydui/img/logo.png"
					},
					{
						infoTitle: "不退不换",
						icon: "http://static.ydcss.com/ydui/img/logo.png"
					},
					{
						infoTitle: "满300包邮",
						icon: "http://static.ydcss.com/ydui/img/logo.png"
					}
				]
			}
		},
		methods: {
			clickMallRemark() {
				this.show2 = true;
			}
		}
	}
</script>

<style lang="less">
	.navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}
	.iconfont { color: #282828; }
	.marginTop02 { margin-top: .2rem; }
	.discount {font-size: .36rem; color: #C93B00; padding-right: .1rem; padding-left: .24rem;}
	.originalPrice {font-size: .24rem; text-decoration: line-through; color: #979797;}
	.discountBtn { color: #CD733B; font-size: 10px; border: 1px solid #CD733B; }
	.iconRight { position: absolute; right: .24rem; top: .1rem; font-size: .24rem; color: #CCCCCC; }

	.mallInfoDiv {
		 margin-top: .3rem; 
		 height: 150px; 
	}
	.mallInfo {
	 	height: 50px; 
	 	margin-left: .24rem; 
	 	margin-right: .24rem;
	}

	.mallInfo span {
		margin-top: .3rem;
	}

	.mallRemark { margin-top: .4rem; background-color: #F8F8F8; position: relative; }
	.mallRemark .yd-grids-4:before {
		border-bottom: none;
	}
	.mallRemark .yd-grids-item:after {
		border-bottom: none;
	}
	.mallRemark .yd-grids-4 .yd-grids-item:not(:nth-child(4n)):before {
		border-right: none;
	}
	.mallRemark .iconRight {
		 top: 1rem;
	}

	.backgroundColor { background-color: #F2F2F2; }
	.rightSpan {  position: absolute; left: 4.9rem; }
	.leftSpan { position: absolute; left: .44rem; }

	.yd-grids-4 { background-color: #F8F8F8; }
	.yd-grids-item { padding: .67rem 0; }

</style>

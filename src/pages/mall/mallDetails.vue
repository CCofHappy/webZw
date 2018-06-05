
<template>
	
	<div>
		<yd-navbar title="商品详情" bgcolor="#F8F8F8" color="#282828" :fixed="true">
	        <router-link :to="{name: 'flashSale'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	        <router-link :to="{name: 'shoppingBag'}" slot="right">
	            <i class="iconfont icon-Slicex11"></i>
	        </router-link>
	        <router-link to="#" slot="right">
	            <i class="iconfont icon--me-7"></i>
	        </router-link>
	    </yd-navbar>
	    <div class="bannerBox margin-top-lg">
	        <bannere :bannerData="auctionGoodsIcons" style="min-height: 7.5rem;"></bannere>
	        <countdownc id="fixedCount" class="positionCount"  :class="{'isFixed': winscoHeight}" :endDate="timeData.endTime" :startDate="timeData.startTime" :serverTime="timeData.serverTime"></countdownc>
	    </div>
	    <div class="marginTop02">
	    	<span class="discount">￥13000</span>
	    	<span class="originalPrice">￥15000</span>
	    	<button class="discountBtn">抢购价</button>
	    </div>
	    <div class="marginTop02">
	    	<div class="mallTitle fw500">
	    		KARUIZAWA 轻井泽 能 22年 1994-2016 #7640
	    	</div>
	    </div>
	    <div class="marginTop02 mallBuy">
	    	<span class="spanLeft">运费：广东省内15元，省外25元，满300包邮</span>
	    	<span class="spanRight">销量：0</span>
	    </div>
	    <div class="segmentation"></div>
	    <!-- 预售 -->
	    <div>
	    	<div class="otherInfo">
		    	<span class="dgray fw500 padding-left-xm">预售</span>
		    	<span class="dgray padding-left-xm">预计45天内发货</span>
		    	<i class="iconRight iconfont icon-Slicex13" @click="presellPopup = true;"></i>
		    </div>
	    </div>
	    <div class="segmentation" style="height: 1px;"></div>
	    <!-- 摇号 -->
	    <div>
	    	<div class="otherInfo">
		    	<span class="dgray fw500 padding-left-xm">摇号</span>
		    	<span class="dgray padding-left-xm">缴纳报名费参与摇号，摇中者方可购买</span>
		    	<i class="iconRight iconfont icon-Slicex13" @click="clickPopup(2)"></i>
		    </div>
	    	<div class="segmentation" style="height: 1px;"></div>
		    <div class="otherInfo">
		    	<span class="dgray fw500 padding-left-xm">时间</span>
		    	<span class="dgray padding-left-xm">2018-04-01  14 : 30开始摇号</span>
		    </div>
		    <div class="otherInfo padding-left-xm">
	    		<img class="imagesHead" v-for="item,key in imagesHeads" :style="{left: -0.14*key+'rem'}" :key="key" :src="item">
	    		<i class="iconfont icon-more1 iconMore" :style="{left: -0.14*(imagesHeads.length-1)+'rem'}"></i>
		    	<span class="dgray padding-left-xm groupNum">10人摇中</span>
		    	<i class="groupIconRight iconfont icon-Slicex13" @click="clickGroupBuy"></i>
		    </div>
	    </div>
	    <div class="segmentation" style="height: 1px;"></div>
	    <!-- 拼团 -->
	    <div>
		    <div class="otherInfo">
		    	<span class="dgray fw500 padding-left-xm">拼团</span>
		    	<span class="dgray padding-left-xm">在活动期间内，参团人数需达到10人或以上</span>
		    	<i class="iconRight iconfont icon-Slicex13" @click="clickPopup(1)"></i>
		    </div>
	    	<div class="segmentation" style="height: 1px;"></div>
		    <div class="otherInfo padding-left-xm">
	    		<img class="imagesHead" v-for="item,key in imagesHeads" :style="{left: -0.14*key+'rem'}" :key="key" :src="item">
	    		<i class="iconfont icon-more1 iconMore" :style="{left: -0.14*(imagesHeads.length-1)+'rem'}"></i>
		    	<span class="dgray padding-left-xm groupNum">8人已拼团</span>
		    	<i class="groupIconRight iconfont icon-Slicex13" @click="clickGroupBuy"></i>
		    </div>
	    </div>
	    <div class="mallRemark">
			<yd-grids-group :rows="4" style="height: 2.36rem;" class="padding-right-lg">
		        <yd-grids-item v-for="item,key in mallInfoIconTitle" :key="key">
		        	<img slot="icon" :src="item.icon">
		            <span slot="text" class="fs12">{{item.infoTitle}}</span>
		        </yd-grids-item>
		    </yd-grids-group>
	        <i class="iconfont icon-Slicex13 iconRight" @click="clickPopup(0)"></i>
	        
	    </div>
	    <div class="margin-top-xd" style="position: relative;">
	    	<span class="fs18 dgray padding-left-xm fw500">商品信息</span>
	    	<i class="iconRight iconfont icon-Slicex13" @click="mallInfoPopup = true;"></i>
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
	    	<span class="padding-left-xm fs18 dgray fw500">商品详情</span>
	    	<div>
	    		<img src="//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg" style="width: 100%; height: 100%; padding: .44rem;">
	    	</div>
	    </div>

	    <footer class="detailsFooter bottomFooter">
	        <a href="javascript:void(0)">
	          <i class="iconfont icon-Slice4"></i>
	          <span>客服</span>
	        </a>
	        <a href="javascript:void(0)">
	          <!-- <i v-if="isNotFavorite == 1" class="iconfont icon-Slice1"></i> -->
	          <i class="iconfont icon-Slice2"></i>
	          <span>收藏</span>
	        </a>
	        <!-- 单个按钮 -->
	        <div class="singleBtn">
		        <yd-button class="sky-btn sky-btn-orange" type="primary" @click.native="buyPopup = true">缴纳报名费：￥300</yd-button>
	        </div>
	        <!-- 两个按钮 -->
	        <!-- <div class="doubleBtn">
		        <yd-button class="sky-btn sky-btn-orange btnRight" type="primary">拼团购买</yd-button>
		        <yd-button class="sky-btn sky-btn-orange btnLeft" type="primary">单独购买</yd-button>
	        </div> -->
	        <!-- 摇号按钮，显示多行文字 -->
	        <!-- <div class="rockSubmitBtn">
	        	<yd-button class="sky-btn sky-btn-orange" type="primary">编号：HM12312<p>您已缴纳报名费：￥300</p></yd-button>
	        </div> -->

	      </footer>

		<mt-popup
		  v-model="mallRemarkPopup"
		  position="bottom" class="canRollPopup">
		    <div class="bottomTitleDiv">
            	<span class="fs18 bottomTitle dgray">{{ popupTitle[popupType] }}</span>
            	<i class="iconfont icon-Slice7 closeBottomIcon fs14" @click="mallRemarkPopup = false;"></i>
            </div>
            <about-mall-serve :remarkType="popupType"></about-mall-serve>
		</mt-popup>

		<mt-popup
		  v-model="mallInfoPopup"
		  position="bottom" class="canRollPopup">
		    <div class="bottomTitleDiv">
            	<span class="fs18 bottomTitle dgray">商品信息</span>
            	<i class="iconfont icon-Slice7 closeBottomIcon fs14" @click="mallInfoPopup = false;"></i>
            </div>
            <div class="mallInfoBottomContent padding-left-xm">
            	<mall-info-remark v-for="item,key in mallInfos" :key="key" :infoRemark="item" :isBack="key%2==0" :isLast="key==(mallInfos.length-1)"></mall-info-remark>
            </div>
		</mt-popup>
		<!-- 预售说明 -->
        <yd-popup v-model="presellPopup" position="bottom" height="80%">
            <div class="bottomTitleDiv">
            	<span class="fs18 bottomTitle dgray">珍品预售</span>
            	<i class="iconfont icon-Slice7 closeBottomIcon fs14" @click="presellPopup = false;"></i>
            </div>
            <div class="padding-left-xm">
            	<pre class="fs14 presellContent">预计45天内发货，请耐心等待。</pre>
            </div>
        </yd-popup>
		<!-- 摇号未开始提示 -->
		<yd-popup v-model="rockTip" position="center" width="75%">
            <div class="tooltip">
            	<!-- <span class="iconfont icon-cuowu" style="position: absolute; right: -.2rem; top: -.2rem; font-size: .48rem;"></span> -->
                <p class="firstLine">
                    摇号将在2018-04-01 14:30开始
                </p>
                <p style="padding-left: .7rem;">
                    请耐心等待
                </p>
                <div class="btnDiv">
                	<yd-button style="width: 90%;" @click.native="rockTip = false">确认</yd-button>
                </div>
            </div>
        </yd-popup>
		<!-- 购买弹窗 -->
		<yd-popup v-model="buyPopup" position="bottom">
            <div class="buyPopup">
            	<div class="buyBottomTitleDiv">
	            	<i class="iconfont icon-Slice7 closeBottomIcon fs14" @click="buyPopup = false;"></i>
	            </div>
	            <div class="padding-left-xm">
	            	<yd-list theme="4">
				        <yd-list-item>
				            <img slot="img" src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
				            <span slot="title" class="buyMallTitle" fs12>KARUIZAWA</span>
				            <yd-list-other slot="other" class="commodityDetails">
				                <p class="subTitle fw600">轻井泽 能 22年 1994-2016 #7640</p>
	      						<p class="price fs20 fw600">￥13000</p>
				                <p class="inventory">库存65件</p>
				            </yd-list-other>
				        </yd-list-item>
				    </yd-list>
				    <div class="halvingLine1"></div>
				    <div class="specification">
				    	<p class="fw500">规格</p>
				    	<yd-button type="hollow">700ml</yd-button>
				    	<yd-button type="hollow">500ml</yd-button>
				    	<yd-button type="hollow">300ml</yd-button>
				    </div>
				    <div class="halvingLine1"></div>
				    <div class="selectNum">
				    	<span class="fw500">数量</span>
					    <yd-spinner></yd-spinner>
				    </div>
	            </div>
	            <div class="footBtn">
	            	<yd-button size="large" class="fs16" type="hollow">确定</yd-button>
	            </div>
            </div>
        </yd-popup>
		

	</div>	

</template>

<script>
	import bannere from '@/components/banner/banner-e.vue'
	import countdownc from '@/components/countdown/countdown-c'
	import aboutMallServe from '@/components/text/aboutMallServe'
	import mallInfoRemark from './mallPublic/mallInfoRemark'
	export default {
		data() {
			return {
				buyPopup: false,
				mallRemarkPopup: false, // 商品说明
				mallInfoPopup: false, // 商品信息
				presellPopup: false, // 预售说明
			    winscoHeight:false,
			    rockTip: false,
			    offsetTop:null,
			    popupTitle: ["中威网服务","拼团规则","摇号规则"],
			    popupType: 0,
			    mallInfos: [
			    	{
			    		leftTitle: '品牌：',
			    		leftContent: '阿贝/Ardbeg',
			    		rightTitle: '酒精度：',
			    		rightContent: '45%'
			    	},
			    	{
			    		leftTitle: '类型：',
			    		leftContent: '单一麦芽威士忌',
			    		rightTitle: '蒸馏厂：',
			    		rightContent: '班尼富'
			    	},
			    	{
			    		leftTitle: '原产地：',
			    		leftContent: '独立装瓶厂',
			    		rightTitle: '酒精度：',
			    		rightContent: '45%'
			    	},
			    	{
			    		leftTitle: '品牌：',
			    		leftContent: '阿贝/Ardbeg',
			    		rightTitle: '蒸馏：',
			    		rightContent: '1991'
			    	},
			    	{
			    		leftTitle: '类型：',
			    		leftContent: '单一麦芽威士忌',
			    		rightTitle: '蒸馏厂：',
			    		rightContent: '班尼富'
			    	},
			    	{
			    		leftTitle: '原产地：',
			    		leftContent: '独立装瓶厂',
			    		rightTitle: '酒精度：',
			    		rightContent: '45%'
			    	},
			    	{
			    		leftTitle: '品牌：',
			    		leftContent: '阿贝/Ardbeg',
			    		rightTitle: '蒸馏：',
			    		rightContent: '1991'
			    	},
			    	{
			    		leftTitle: '类型：',
			    		leftContent: '单一麦芽威士忌',
			    		rightTitle: '蒸馏厂：',
			    		rightContent: '班尼富'
			    	}
			    ],
			    timeData: {
			    	endTime: 1114000000,
			    	startTime: 1112500000,
			    	serverTime: 1112200000,
			    },
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
				],
				imagesHeads: [
					"//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
					"//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
					"//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
					"//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
					"//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
					"//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
					"//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg"
				],
				auctionGoodsIcons: [
					{
						auctionGoodsPath: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg"
					},
					{
						auctionGoodsPath: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg"
					}
				]
			}
		},
		methods: {
			clickMallRemark() {
				this.mallRemarkPopup = true;
			},
			clickGroupBuy() {
				this.$router.push({name:"groupBuy"});
			},
			handleScroll () {
		      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		      if(!this.offsetTop && document.querySelector('#fixedCount')){
		        this.offsetTop = document.querySelector('#fixedCount').offsetTop;
		      }
		      if(scrollTop >= this.offsetTop){
		         this.winscoHeight = true;
		      }else {
		        this.winscoHeight = false;
		      }
		    },
		    clickPopup( popupType ) {
		    	this.popupType = popupType;
		    	this.mallRemarkPopup = true;
		    }
		},
		components: {
			bannere,
			countdownc,
			aboutMallServe,
			mallInfoRemark
		},
		mounted() {
			this.$nextTick(function(){
		       window.addEventListener('scroll', this.handleScroll)
		    })
		}
	}
</script>

<style lang="less">
	.navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}
	.bannerBox {
	  position: relative;
	  .positionCount {
	    position: absolute;
	    bottom: 0rem;
	    z-index:10;
	    width: 100%;
	   }
	   .isFixed {
	    position: fixed;
	    top: 1rem;
	    width: 100%;
	    height: .64rem;
	    z-index: 2000;
	   }
	}
	.iconfont { color: #282828; }
	.marginTop02 { 
		margin-top: .2rem; 
		.discountBtn { color: #CD733B; font-size: 10px; border: 1px solid #CD733B; }
	}
	.discount {font-size: .36rem; color: #C93B00; padding-right: .1rem; padding-left: .24rem;}
	.originalPrice {font-size: .24rem; text-decoration: line-through; color: #979797;}
	.iconRight { position: absolute; right: .24rem; top: .1rem; font-size: .24rem; color: #CCCCCC; }

	.imagesHead { position: relative; border-radius: 100%; border: 2px solid white; }
	.groupIconRight {position: absolute;right: .24rem;top: .16rem;font-size: .24rem;color: #CCCCCC;}
	.iconMore { position: relative; top: -0.2rem; color: #CCCCCC; }
	.backgroundColor { background-color: #F2F2F2; }

	.mallTitle {
		 color: #282828; font-size: .36rem; margin-left: .24rem;
	}
	.mallBuy {
		 font-size: .24rem; color: #979797;
		 margin-bottom: .4rem;
		 .spanLeft {
		 	padding-left: .24rem;
		 }
		 .spanRight {
			position: absolute; 
			right: .24rem;
		 }
	}

	.groupNum {
		position: absolute;right: .8rem; top: .1rem;
	}
	
	.mallInfoDiv {
		 margin-top: .3rem; 
		 height: 150px; 
	}
	.mallInfo {
	 	height: 50px; 
	 	margin-left: .24rem; 
	 	margin-right: .24rem;
	 	.leftSpan { 
			position: absolute; 
			left: .44rem; 
			color: #979797; 
			span { color: #282828; }
		}
	}

	.mallInfo span {
		margin-top: .3rem;
	}

	.mallRemark { background-color: #F8F8F8; position: relative; }
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

	.otherInfo { 
		position: relative; 
		margin-bottom: .3rem; 
		margin-top: .3rem; 
		img {
			width: .6rem;
			height: .6rem;
		}
	}
	.canRollPopup { 
		width: 100%; 
		.bottomContent {
			max-height: 10rem;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.mallInfoBottomContent {
			max-height: 10rem;
			overflow-y: auto;
		}
		// .lastContent {
		// 	margin-bottom: .8rem;
		// }
	}

	
	.rightSpan {  
		position: absolute; 
		left: 4.9rem; 
		color: #979797; 
		span { color: #282828; }
	}
	

	.yd-grids-4 { background-color: #F8F8F8; }
	.yd-grids-item { padding: .67rem 0; }

	.bottomTitleDiv {
		 height: 1.28rem; 
		 background-color: #F8F8F8;
		 .bottomTitle {
			position: absolute;
			left: .24rem;
			top: .4rem;
			font-weight: 500;
		}

		.closeBottomIcon {
			position: absolute;
			right: .28rem;
			top: .48rem;
			color: #CCCCCC;
		}
	}

	.presellContent {
		margin-top: .8rem;
		color: #282828;
		margin-bottom: .8rem;
	}

	.mallInfoBottomContent {
		margin-top: .4rem;
		// max-height: 10rem;
		// overflow-y: auto;
		// .mallInfo { margin-left: 0; }
		// .bottomLastMallInfo {
		// 	margin-bottom: 1.72rem;
		// }
	}
	.bottomFooter {
		.doubleBtn {
			.sky-btn {
				width: 2.3rem;
			}
			.btnRight {
				background-color: #282828;
			}
			.btnLeft {
				background-color: #333333;
			}
		}
		.rockSubmitBtn {
			button {
				color: #656565;
				font-size: .28rem;
			}
			p {
				font-size: .2rem;
			}
		}
		.sky-btn-orange, .sky-btn-orange:active {
			border: none;
		}
	}
	.tooltip {
		background-color: #FFFFFF;
		.firstLine {
			padding-top: 1rem; padding-left: .7rem; margin-right: .4rem;
		}
		.btnDiv {
			text-align: center; margin-top: 1rem; padding-bottom: .4rem; padding-left: .4rem; padding-right: .4rem;
			button {
				background-color: #282828;
				color: #CD733B;
			}
		}
		p { color: #282828; }
	}
	.buyPopup {
		.buyBottomTitleDiv {
			height: 1rem;
			.closeBottomIcon {
				position: absolute;
				right: .28rem;
				top: .3rem;
				color: #CCCCCC;
			}
		}
		.commodityDetails {
			display: block; 
			padding-top: .1rem;
		}
		.yd-list-theme4 .yd-list-item .yd-list-mes { padding-left: 0; }
		.buyMallTitle { color: #CD733B; margin-left: .4rem; }
		.subTitle {padding-bottom: .1rem; color: #282828; margin-left: .4rem;}

		.price { color: #C93B00; margin-left: .4rem; }
		.inventory { color: #282828; margin-top: .1rem; margin-left: .4rem;}
		
		.specification {
			button {
				margin-top: .4rem;
				margin-right: .6rem;
				padding: 0 .4rem;
				height: .6rem;
				background-color: #CD733B;
				color: #FFFFFF;
			}

		}
		.halvingLine1 {
			margin-top: .4rem;
			margin-bottom: .8rem;
		}
		.selectNum {
			position: relative;
			.yd-spinner {
				position: absolute;
				right: .24rem;
				top: -.1rem;
			}
		}
		.footBtn {
			margin-top: 1rem;
			button {
				background-color: #282828;
				color: #CD733B;
			}
		}
	}

</style>

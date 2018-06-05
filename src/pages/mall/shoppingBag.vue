
<template>
	<div>
		<yd-navbar title="购物袋" bgcolor="#F8F8F8" color="#282828" :fixed="true">
	        <router-link :to="{name: 'flashSale'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	        <span class="navRightBtn" @click="clickRightBtn" slot="right">{{rightBtnText}}</span>
	    </yd-navbar>
	    <div class="margin-top-lg">
	    	<!-- <div style="height: .4rem;"></div> -->
	    	<yd-checkbox-group v-model="checkbox6">
	    		<div class="flex mallList">
		    		<div class="firstLine">
		    			<yd-checkbox class="checkBox" color="#282828" val="1" shape="circle">&nbsp;</yd-checkbox>
		    		</div>
			    	<div class="secondLine">
			    		<img src="//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg">
			    	</div>
			    	<div class="thirdLine">
			    		<p class="title">波特艾伦25年 1976-2001 道格拉斯·兰恩</p>
			    		<p class="detail fs12"><span>净含量：</span><span>700ml</span><span class="rightSpan">酒精度：<span></span>45%vol</span></p>
			    		<p class="lastP"><span class="priceSpan">¥ 33000</span><yd-spinner v-model="spinner3" height=".44rem" width="1.7rem"></yd-spinner></p>
			    	</div>
		    	</div>
		    	<div class="segmentation" style="height: 1px;"></div>
		    	<div class="flex mallList">
		    		<div class="firstLine">
		    			<yd-checkbox class="checkBox" val="1" shape="circle">&nbsp;</yd-checkbox>
		    		</div>
			    	<div class="secondLine">
			    		<img src="//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg">
			    	</div>
			    	<div class="thirdLine">
			    		<p class="title">波特艾伦25年 1976-2001 道格拉斯·兰恩</p>
			    		<p class="detail fs12"><span>净含量：</span><span>700ml</span><span class="rightSpan">酒精度：<span></span>45%vol</span></p>
			    		<p class="lastP"><span class="priceSpan">¥ 33000</span><yd-spinner v-model="spinner3" height=".44rem" width="1.7rem"></yd-spinner></p>
			    	</div>
		    	</div>
		    	<div class="segmentation" style="height: 1px;"></div>
		    	<div class="flex mallList">
		    		<div class="firstLine">
		    			<yd-checkbox class="checkBox" val="1" shape="circle">&nbsp;</yd-checkbox>
		    		</div>
			    	<div class="secondLine">
			    		<img src="//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg">
			    	</div>
			    	<div class="thirdLine">
			    		<p class="title">波特艾伦25年 1976-2001 道格拉斯·兰恩</p>
			    		<p class="detail fs12"><span>净含量：</span><span>700ml</span><span class="rightSpan">酒精度：<span></span>45%vol</span></p>
			    		<p class="lastP"><span class="priceSpan">¥ 33000</span><yd-spinner v-model="spinner3" height=".44rem" width="1.7rem"></yd-spinner></p>
			    	</div>
		    	</div>
		    	<div class="segmentation" style="height: 1px;"></div>
		        
		    </yd-checkbox-group>
	    </div>
	    <div class="segmentation bottomLine"></div>
	    <div class="bottomFoot">
	    	<div>
	    		<yd-checkbox v-model="checkbox1" class="bottomLeft" shape="circle">全选</yd-checkbox>
	    		<span v-show="rightBtnText=='管理'" class="bottomMoney fs16">总计:<span class="moneySpan fs16">￥63000</span></span>
	    		<button class="bottomRightBtn">{{bottomRightBtnText}}</button>
	    	</div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "shoppingBag",
		data() {
			return {
				checkbox6: ['1'],
				checkbox1: true,
				rightBtnText: "管理",
				bottomRightBtnText: "去付款",
				spinner3: 0,
				list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
			}
		},
		methods: {
			clickRightBtn() {
				if (this.rightBtnText == "管理") {
					this.rightBtnText = "完成";
					this.bottomRightBtnText = "删除";
				} else {
					this.rightBtnText = "管理";
					this.bottomRightBtnText = "去付款";
				}
			}
		}
	}
</script>


<style lang="less">
	
	.mallList {
		padding-bottom: .4rem;
		padding-top: .4rem;
		.firstLine {
			margin-left: .24rem;
			.checkBox {
				margin-top: .6rem;
			}
			.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon {
				background-color: #282828;
				border-color: #282828;
			}
		}
		.secondLine {
			position: relative;
			height: 1.6rem;
			width: 1.6rem;
			&:before {
				position: absolute;
				content: '已售罄';
				color: white;
				z-index: 101;
				text-align: center;
				line-height: 1.6rem;
				width: 100%;
				height: 100%;
			}
			&:after{
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				z-index: 100;
				background-color: black;
				opacity: 0.4;
			}
			img {
				width: 1.6rem;
				height: 1.6rem;
			}
		}
		.thirdLine {
			margin-left: .2rem;
			.title {
				color: #282828;
				padding-right: .24rem;
			}
			.detail {
				color: #979797;
				padding-top: .1rem;
				.rightSpan {
					position: absolute;
					right: .24rem;
				}
			}
			.lastP {
				margin-top: .1rem;
				.priceSpan {
					color: #C93B00;
				}
				.yd-spinner {
					position: absolute;
					right: .24rem;
				}
			}
		}
	}

	.bottomFoot {
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 1rem;
		.bottomLeft {
			position: absolute;
			left: .24rem;
			bottom: .3rem;
		}
		.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon {
			background-color: #282828;
			border-color: #282828;
		}
		.bottomMoney {
			position: absolute;
			right: 2.24rem;
			bottom: .3rem;
			color: #282828;
			.moneySpan {
				color: #C93B00;
			}
		}
		.bottomRightBtn {
			position: absolute;
			right: .24rem;
			width: 1.6rem;
			height: .6rem;
			bottom: .2rem;
			color: #CD733B;
			background-color: #282828;
		}
	}
	.bottomLine {
		position: fixed;
		width: 100%;
		bottom: 1rem;
		height: 1px;
	}

</style>


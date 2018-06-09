
<!-- 
	status 取值
			1 : 订单标题
				传入content控制内容
				content {
					orderNumber : 订单编号
					orderStatus : 右侧文字，表示订单状态
				}
			2 : 合计
			3 : 靠右对齐的按钮 
				需要传content对象控制按钮个数以及按钮文字
				content {  下面前三个字段分别代表一个按钮，不传则不显示该按钮
					leftBtnText: 按钮的文字；是一个无背景颜色，灰色字体和边框的按钮
					rightBtnText: 按钮文字； 是一个黑色背景，橙色字体的按钮
					otherBtnText: 按钮文字； 是一个无背景颜色，橙色字体的按钮
					type: 用于区分点击按钮后触发的方法
				}
			4 : 商品信息标题 (左对齐的一段文字)
				content: {
					isFw: 是否需要加粗
					titleText: 文字内容
				}
			5 : 商品数量、总额、运费
			6 : 应付金额
			7 : 联系客服
			8 : 订单编号、创建时间
			9 : 不可再申请售后，原因是已申请或申请已过期
			10 : 售后服务状态信息：已完成、已取消、退款中、申请中
-->

<template>
	
	<div>
		<div class="orderTitle" v-if="status==1">
			<p><span class="leftSpan fblack fw600">订单号：{{this.content.orderNumber}}</span><span class="rightSpan forange fw500">{{this.content.orderStatus}}</span></p>
		</div>
		<div class="total" v-else-if="status==2">
			<p><span class="mallNumber fblack">共 1 件商品</span><span class="fblack">合计：</span><span class="fw600">¥ 33000</span><span class="fblack">（含运费0.00元）</span></p>
		</div>
		<div class="orderBottom" v-else-if="status==3">
			<button class="leftBtn" v-show="orderBottomData.isLeft" @click="clickLeftBtn">{{orderBottomData.leftText}}</button>
			<button class="rightBtn" v-show="orderBottomData.isRight" @click="clickRightBtn">{{orderBottomData.rightText}}</button>
			<button class="otherBtn" v-show="orderBottomData.isOther" @click="clickOtherBtn">{{orderBottomData.otherText}}</button>
			<button class="otherBtn" v-show="orderBottomData.isOrange" @click="clickOrangeBtn">{{orderBottomData.orangeText}}</button>
		</div>
		<div class="orderTitle" v-else-if="status==4">
			<span class="fblack" :class="{ fw500: content.isFw}">{{content.titleText}}</span>
		</div>
		<div class="orderTitle" v-else-if="status==5">
			<p class="fblack"><span class="leftSpan">商品数量</span><span class="rightSpan">2件</span></p>
			<p class="middle fblack"><span class="leftSpan">商品总额</span><span class="rightSpan">￥66000</span></p>
			<p class="fblack"><span class="leftSpan">运费</span><span class="rightSpan">￥0</span></p>
		</div>
		<div class="payment" v-else-if="status==6">
			<p class="fblack"><span class="leftSpan fw600">应付金额</span><span class="rightSpan">￥63000</span></p>
		</div>
		<div class="contactService" v-else-if="status==7">
			<p class="fblack"><span class="leftSpan fw600">联系客服</span><span class="rightSpan iconfont icon--me-6"></span></p>
		</div>
		<div class="contactService" v-else-if="status==8">
			<p class="grayd"><span class="fs12">订单编号：12313141414241241</span></p>
			<p class="grayd"><span class="fs12">创建时间：2018-05-03  13:59:37 </span></p>
		</div>
		<div class="contactService" v-else-if="status==9">
			<p class="grayd" v-if="!content"><span class="fs12 margin-right-xs">商品已申请售后</span><span class="iconfont icon-Slicex13 fs12"></span></p>
			<p class="grayd" v-else><span class="iconfont icon-jinzhi fs12 margin-right-xs"></span><span class="fs12">商品已过售后期</span></p>
		</div>
		<div class="contactService" v-else-if="status==10">
			<p class="grayd type10"><span class="forange margin-right-md">{{content.status}}</span><span class="fs12">{{content.contentText}}</span><span class="iconfont icon-Slicex13 fs12 rightSpan"></span></p>
		</div>
		<div v-else>
			不知道你想干啥
		</div>
        <div v-if="!notHalvingLine" class="segmentation1"></div>
	</div>

</template>

<script>
	export default {
		name: "orderTitle",
		props: ["status","content","notHalvingLine"],
		data() {
			return {
				orderBottomData: {
					isLeft: false,  // 无背景灰色字体的按钮
					isRight: false,  // 黑色背景，橙色字体的按钮
					isOther: false,  // 无背景，橙色字体的按钮
					isOrange: false, // 同上
					leftText: "取消订单", // 对应按钮的文字
					rightText: "去付款",
					otherText: "提醒发货"
				},
			}
		},
		methods: {
			clickLeftBtn() {
				if (this.content.type == "payMoney") {
					this.$emit("callBack","cancleOrder");
				} else if (this.content.type == "receiveGood") {
					this.$emit("callBack","lookLogistics");
				} else if (this.content.type == "finish") {
					this.$emit("callBack","lookLogistics");
				} else if (this.content.type == "cancle") {
					this.$emit("callBack","deleteOrder");
				}
			},
			clickRightBtn() {
				if (this.content.type == "payMoney") {
					this.$emit("callBack","goToPay");
				}
			},
			clickOtherBtn() {
				if (this.content.type == "sendGood") {
					this.$emit("callBack","remindSendGood");
				} else if (this.content.type == "receiveGood") {
					this.$emit("callBack","confirmReceiveGood");
				} else if (this.content.type == "cancle") {
					this.$emit("callBack","addShoppingCar");
				}
			},
			clickOrangeBtn() {
				this.$emit("callBack","clickOrangeBtn");
			}
		},
		mounted() {
			if (this.status == 3) {
				if (!this.content) {
					this.orderBottomData.isLeft = true;
					this.orderBottomData.isRight = true;
					// this.orderBottomData.isOther = false;
					this.orderBottomData.leftText = "取消订单";
					this.orderBottomData.rightText = "去付款";
				} else {
					if (this.content.leftBtnText) {
						this.orderBottomData.isLeft = true;
						this.orderBottomData.leftText = this.content.leftBtnText;
					}
					if (this.content.rightBtnText) {
						this.orderBottomData.isRight = true;
						this.orderBottomData.rightText = this.content.rightBtnText;
					}
					if (this.content.otherBtnText) {
						this.orderBottomData.isOther = true;
						this.orderBottomData.otherText = this.content.otherBtnText;
					}
					if (this.content.orangeBtnText) {
						this.orderBottomData.isOrange = true;
						this.orderBottomData.orangeText = this.content.orangeBtnText;
					}
				}
			} else if (this.status == 1) {

			}
			
		}
	}
</script>

<style lang="less" scoped>
	.orderTitle {
		background-color: white;
		padding: .3rem .24rem;
		.rightSpan {
			position: absolute;
			right: .24rem;
		}
		.middle {
			margin-top: .1rem;
			margin-bottom: .1rem;
		}
	}
	.payment {
		background-color: white;
		padding: .3rem .24rem;
		.rightSpan {
			position: absolute;
			right: .24rem;
			color: #C93B00;
		}
	}
	.total {
		background-color: white;
		padding: .2rem .24rem;
		p {
			text-align: right;
		}
		.mallNumber {
			margin-right: .2rem;
		}
	}
	.orderBottom {
		background-color: white;
		padding: .2rem .24rem;
		text-align: right;
		button {
			width: 1.6rem;
			height: .6rem;
		}
		.leftBtn {
			color: #979797;
			// border: .5px solid #979797;
			// margin-right: .3rem;
		}
		.rightBtn {
			background-color: #282828;
			color: #CD733B;
			border: none;
			margin-left: .3rem;
		}
		.otherBtn {
			color: #CD733B;
			border-color: #CD733B;
			margin-left: .3rem;
		}
	}
	.contactService {
		background-color: white;
		padding: .3rem .24rem;
		p {
			position: relative;
		}
		.rightSpan {
			position: absolute;
			right: .24rem;
			color: #CD733B;
		}
		.type10 {
			.rightSpan {
				position: absolute;
				right: 0;
				top: .1rem;
				color: #CCCCCC;
			}
		}
	}
</style>











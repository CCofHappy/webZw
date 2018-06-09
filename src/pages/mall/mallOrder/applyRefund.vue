<template>
	<div>
		<yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" color="#282828" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      	</yd-navbar>
      	<div class="margin-top-lg">
      		<order-info :bottomLine="true"></order-info>
			<div class="refundType">
				<p><span class="fblack">仅退款</span><yd-checkbox class="rightCheck" v-model="checkbox1" shape="circle">&nbsp;</yd-checkbox></p>
			</div>
			<div class="segmentation1"></div>
			<div class="refundType">
				<p><span class="fblack">退货退款</span><yd-checkbox class="rightCheck" v-model="checkbox1" shape="circle">&nbsp;</yd-checkbox></p>
			</div>
			<div class="segmentation"></div>
			<div class="refundType">
				<p><span class="fblack">货物状态</span><span class="rightSpan">已发货</span></p>
			</div>
			<div class="segmentation1"></div>
			<div class="refundType">
				<p><span class="fblack">退款数量：</span><yd-spinner class="rightSpinner" v-model="spinner3"></yd-spinner></p>
			</div>
			<div class="segmentation1"></div>
			<div class="refundType">
				<p><span class="fblack">退款金额：</span><span class="fw600 priceNum-sm">￥33000</span></p>
			</div>
			<div class="refundMoneyAfter">
				<p class="fblack fs12">最多退 ¥ 33000，含邮费 ¥ 0</p>
			</div>
			<div class="serveType flex">
				<div>
					<span class="red fs20">*</span><span class="">退款说明：</span>
				</div>
				<div class="flex-1">
					<yd-input v-model="input1" placeholder="请填写您的退款原因"></yd-input>
				</div>
	        </div>
			<div class="segmentation1"></div>
			<div class="serveType">
				<div>
					<span class="red fs20">*</span><span class="">上传凭证：</span>
				</div>
				<div style="padding: .3rem 0;">
					<img src="//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg" style="width: 2.24rem; height: 2.24rem;">
				</div>
	        </div>
	        <div class="bottomDiv">
	        	<button>提交</button>
	        </div>
      	</div>
	</div>
</template>

<script>
  	import orderInfo from "../mallPublic/orderInfo"
  	import orderTitle from "../mallPublic/orderTitle"
	export default {
		name: "applyRefund",
		data() {
			return {
				checkbox1: false,
				input1: "",
				spinner3: 0
			}
		},
		components: {
			orderInfo,
			orderTitle
		}
	}
</script>

<style lang="less" scoped>
	.refundType {
		position: relative;
		padding: .3rem .24rem;
		.rightCheck {
			position: absolute;
			right: 0;
		}
		.rightSpan {
			position: absolute;
			right: .24rem;
		}
		.rightSpinner {
			position: absolute;
			right: .24rem;
			top: .2rem;
		}
	}
	.refundMoneyAfter {
		padding: .2rem .24rem;
		background-color: #F2F2F2;
	}
	.serveType {
		padding: .3rem .24rem;
	}
	.bottomDiv {
		background-color: #F2F2F2;
		button {
			position: flex;
			width: 100%;
			bottom: 0;
			height: 1rem;
			background-color: #282828;
			color: #CD733B;
			font-size: .32rem;
			margin-top: .36rem;
		}
	}
</style>

<style lang="less">
	.refundType {
		.yd-checkbox>input[type=checkbox]:checked+.yd-checkbox-icon {
			background-color: #282828;
			border-color: #282828;
		}
	}
	.navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}
</style>















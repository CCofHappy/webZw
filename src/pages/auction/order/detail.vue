<template>
	<div class="bggray padding-bottom-lg">
		<titleHead :fixed="true"></titleHead>
		<header>
			<p class="fs16">待收货</p>
			<p class="margin-top-sm fw200">剩余
				<yd-countdown :time="666666" timetype="second"></yd-countdown> 自动确认收货</p>
		</header>
		<div class="sky-box-cell padding-0">
			<yd-cell-group>
				<yd-cell-item arrow class="widthRich padding-left-xs padding-top-md padding-bottom-md">
					<span slot="left" class="fs14">
							<p class="clearfix">
	              <span class="pull-left fw600">物流信息</span>
					<span class="pull-left margin-left-sm">
	              	<p class="green text2row" style="width: 4.2rem;">已签收，签收人是同事</p>
	              	<p class="fs12 margin-top-sm gray">2017-06-08 12:15:56</p>
	              </span>
					</p>
					</span>
				</yd-cell-item>
				<yd-cell-item class="widthRich padding-left-xs padding-top-md padding-bottom-md">
					<div slot="left" class="fs14" style="width: 100%;">
					 	<p>
					 		<span class="fw600">收货信息 </span>
					<span class="margin-left-sm">张三</span>
					<span class="pull-right">18202070909</span>
					</p>
					<p class="margin-top-sm">
						<p class="breakWord" style="margin-left: 1.4rem;">
							广东省惠州市惠城区下角东路910文化创意园6栋2楼中威网
						</p>
					</p>
					</div>
				</yd-cell-item>
			</yd-cell-group>
			<div class="cl-box cl-box-bottom bgwhite" style="margin-top: -0.15rem;">
				<div class="cl-row">
					<div class="cl-td fw600">
						商品信息
					</div>
					<div class="cl-td">

					</div>
				</div>
				<div class="cl-row">
					<div class="cl-td goods">
						<img src="@/assets/default/jiu.jpg">
					</div>
					<div class="cl-td text fs12 padding-right-xs nowrap">
						<p class="textfir" style="width:4.6rem;">WNNFOL</p>
						<div class="flex margin-top-xs fgray">
							<div class="flex-1">净含量：300ml</div>
							<div class="flex-1">酒精度：56%vol</div>
						</div>
						<div class="flex margin-top-xs fgray">
							<div class="flex-1">拍品编号：123123</div>
							<div class="flex-1">起拍价：￥22222</div>
						</div>
						<p class="margin-top-xs">成交价：<span class="fs16 red fs600">￥111</span></p>
					</div>
				</div>
				<div class="cl-row">
					<div class="cl-td goods">
						<img src="@/assets/default/jiu.jpg">
					</div>
					<div class="cl-td text fs12 padding-right-xs nowrap">
						<p class="textfir" style="width:4.6rem;">WNNFOL</p>
						<div class="flex margin-top-xs fgray">
							<div class="flex-1">净含量：300ml</div>
							<div class="flex-1">酒精度：56%vol</div>
						</div>
						<div class="flex margin-top-xs fgray">
							<div class="flex-1">拍品编号：123123</div>
							<div class="flex-1">起拍价：￥22222</div>
						</div>
						<p class="margin-top-xs">成交价：<span class="fs16 red fs600">￥111</span></p>
					</div>
				</div>
			</div>
			<yd-cell-group>
				<yd-cell-item class="widthRich">
					<div slot="left" class="position clearfix fs14" style="padding-right: .2rem;">
						<p>
							<span>商品数量</span>
							<span class="pull-right">2件</span>
						</p>
						<p class="margin-top-sm">
							<span>商品总额</span>
							<span class="pull-right">￥2000</span>
						</p>
						<p class="margin-top-sm">
							<span>保证金</span>
							<span class="pull-right">－ ¥ 100</span>
						</p>
						<p class="margin-top-sm margin-bottom-sm">
							<span>商品总额</span>
							<span class="pull-right">＋ ¥ 50</span>
						</p>
					</div>
				</yd-cell-item>
				<yd-cell-item>
					<span slot="left" class="fw600">应付金额</span>
					<span slot="right" class="fw600"><span class="red fs14 fw600">￥6000</span></span>
				</yd-cell-item>
			</yd-cell-group>
			
			<yd-cell-group style="margin-top: -0.15rem;">
				<yd-cell-item class="widthRich padding-left-xs padding-top-md padding-bottom-md">
					<div slot="left" class="fs14" style="width: 100%;">
					 	<p>
					 		<span class="fw600">发票信息 </span>
							<span class="pull-right">惠州中威科技有限公司</span>
					</p>
					<p class="margin-top-sm">
						<p class="text-right">
							2913729471294J
						</p>
					</p>
					</div>
				</yd-cell-item>
			</yd-cell-group>
			
			<yd-cell-group style="margin-top: -0.15rem;">
				<!--servicePhone 在bootstrap文件里设置了全局-->
				<yd-cell-item type="a" :href="`tel:${servicePhone}`">
					<span slot="left" class="fw600">联系客服</span>
					<span slot="right" class="fw600"><i class="red fw600 fs18 iconfont icon--me-6"></i></span>
				</yd-cell-item>
			</yd-cell-group>
			<div class="padding-sm bgwhite fs12 gray margin-bottom-md" style="margin-top: -0.15rem;">
				<p>订单编号：12313141414241241</p>
				<p class="margin-top-xs">创建时间：2018-05-03 13:59:37 </p>
				<p class="margin-top-xs">付款时间：2018-05-03 15:05:56</p>
				<p class="margin-top-xs">发货时间：2018-05-03 18:45:45</p>
			</div>
		</div>
		<div class="footFixed padding-right-sm">
			<!--<yd-button type="hollow" color="#CD733B" bgcolor="#000000" style="border-color: #CD733B;" class="sky-btn-xs pull-right margin-top-xs margin-left-md">去付款</yd-button>-->
			<yd-button type="hollow" color="#CD733B" style="border-color: #CD733B;" class="sky-btn-xs pull-right margin-top-xs margin-left-md">确认收货</yd-button>
			<yd-button type="hollow" color="#CD733B" style="border-color: #CD733B;" class="sky-btn-xs pull-right margin-top-xs margin-left-md">申诉</yd-button>
			<yd-button type="hollow" color="#979797" class="sky-btn-xs pull-right margin-top-xs">查看物流</yd-button>
		</div>
	</div>
</template>

<script>
	import titleHead from '@/components/common/Title/Thead.vue'
	export default {
		components: {
			titleHead
		},
		data() {
			return {

			}
		},
		computed: {

		},
		methods: {

		},
		mounted() {

		},
		watch: {
			$route() {

			}
		}
	}
</script>

<style scoped lang="less">
	header {
		width: 12rem;
		max-width: 100%;
		color: #FFFFFF;
		display: table-cell;
		height: 1.6rem;
		vertical-align: middle;
		background: #CD733B;
		padding-left: .24rem;
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
</style>
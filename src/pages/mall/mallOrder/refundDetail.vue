<template>
	<div>
		<yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" color="#282828" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      	</yd-navbar>
      	<div class="margin-top-lg refundDetail">
			<order-detail-title :titleContent="{isMoreTitle:false, mainTitle:'审核中'}"></order-detail-title>
			<order-title :status="4" :content="{titleText: '我们将在三个工作日内处理您的退款申请，请等待'}"></order-title>
        	<order-title :status="3" :content="{type: 'receiveGood', otherBtnText: '撤销申请'}" @callBack="clickBtn"></order-title>
			<order-title :status="4" :content="{titleText: '您的退货申请已通过，请在7天内将商品退回并上传物流单号'}"></order-title>
        	<order-title :status="3" :content="{type: 'receiveGood', otherBtnText: '填写物流', orangeBtnText: '撤销申请'}" @callBack="clickBtn"></order-title>
			<order-title :status="4" :content="{titleText: '您退货的商品与售出的商品不一致，我们已拒收，请查看退回的物流信息'}" :notHalvingLine="true"></order-title>
			<div class="mallImages flex">
				<div class="flex-1">
					<img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
				</div>
				<div class="flex-1">
					<img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
				</div>
				<div class="flex-1">
					<img src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
				</div>
			</div>
        	<div class="segmentation"></div>
			<receive-good-info :status="2" :contentInfo="{leftTitle: '物流信息', time: '2017-06-08 12:15:56', newInfo: '已发往【广州分部】'}"></receive-good-info>
			<receive-good-info :status="1" :contentInfo="{leftTitle: '退货地址', name: '李小姐', phoneNum: '400-830-5299', address: '广东省惠州市惠城区江北文昌一路华贸金融街12号楼103'}"></receive-good-info>
        	<div class="segmentation"></div>
			<order-title :status="4" :content="{ isFw:true, titleText: '退款进度'}"></order-title>
      		<zw-step></zw-step>
        	<div class="segmentation"></div>
			<order-title :status="4" :content="{ isFw:true, titleText: '退款信息'}"></order-title>
			<order-info></order-info>
			<div class="refundReason">
				<p>退款原因：不喜欢</p>
				<p>退款数量：2件</p>
				<p>退款金额：¥ 50000</p>
				<p>服务单号：21323125361</p>
				<p>订单号：676474234232</p>
			</div>
      	</div>
		<yd-popup v-model="remindSendGood" position="center" width="75%">
	        <div class="tooltip">
	            <p class="firstLine fblack text-center">
	                确定要撤销退货申请吗？
	            </p>
	            <div class="btnDiv">
	              <yd-button style="width: 90%;" @click.native="remindSendGood = false">确认</yd-button>
	            </div>
	        </div>
	        <i class="iconfont icon-cuowu closeIcon" @click="remindSendGood = false"></i>
	    </yd-popup>
	    <yd-popup v-model="writeLogistics" position="bottom" width="75%">
	        <div class="bottomTitle">
	        	<p>
	        		<span class="fs18 fw500">填写物流信息</span>
	            	<i class="iconfont icon-Slice7 rightIcon fs12 ffgray"></i>
	        	</p>
	        </div>
	        <div class="flex">
	        	<div class="leftDiv">
	        		<span>物流公司</span>
	        	</div>
	        	<div class="rightDiv">
	        		<yd-input v-model="input1" placeholder="请输入物流公司"></yd-input>
	        		<div class="segmentation1"></div>
	        	</div>
	        </div>
	        <div class="flex">
	        	<div class="leftDiv">
	        		<span>物流单号</span>
	        	</div>
	        	<div class="rightDiv flex-v">
	        		<yd-input v-model="input1" placeholder="请输入物流单号"></yd-input>
	        		<div class="segmentation1"></div>
	        	</div>
	        </div>
	        <div class="flex">
	        	<div class="leftDiv">
	        		<span>联系电话</span>
	        	</div>
	        	<div class="rightDiv flex-v">
	        		<yd-input v-model="input1" placeholder="请输入联系电话"></yd-input>
	        		<div class="segmentation1"></div>
	        	</div>
	        </div>
	        <div class="bottomBtn">
	        	<button class="fs16 forange">确定</button>
	        </div>
	    </yd-popup>
	</div>
</template>

<script>
	import orderDetailTitle from "../mallPublic/orderDetailTitle"
  	import orderTitle from "../mallPublic/orderTitle"
  	import orderInfo from "../mallPublic/orderInfo"
	import receiveGoodInfo from "../mallPublic/receiveGoodInfo"
	import zwStep from "../mallPublic/zwStep"
	export default {
		name: "refundDetail",
		data() {
			return {
				remindSendGood: false,
				writeLogistics: false,
				input1: ""
			}
		},
		components: {
			orderDetailTitle,
			orderTitle,
			orderInfo,
			receiveGoodInfo,
			zwStep
		},
		methods: {
			clickBtn(status) {
				console.log(status);
				// this.remindSendGood = true;
				this.writeLogistics = true;
			}
		}
	}
</script>

<style lang="less" scoped>
	.refundDetail {
		.refundReason {
			padding: .3rem .24rem .7rem .24rem;
			p {
				font-size: .24rem;
				color: #282828;
				margin-bottom: .1rem;
			}
		}
		.mallImages {
			padding: 0 .24rem;
			margin-bottom: .3rem;
			div {
				margin-right: .14rem;
			}
			img {
				width: 2.24rem;
				height: 2.24rem;
			}
		}
	}
	.tooltip {
	    background-color: #FFFFFF;
	    .firstLine {
	      padding-top: 1rem; padding-left: .7rem; margin-right: .7rem;
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

	.bottomTitle {
		p {
			position: relative;
		}
		padding: .4rem .24rem;
		background-color: #F8F8F8;
		.rightIcon {
			position: absolute;
			right: 0;
			top: .1rem;
		}
	}
	.flex {
		margin-top: .6rem;
		.leftDiv {
			margin-left: .96rem;
			margin-right: .2rem;
			font-size: .32rem;
			color: #979797;
		}
		.rightDiv {
			.segmentation1 {
				margin-top: .1rem;
			}
		}
	}
	.bottomBtn {
		margin-top: .6rem;
		button {
			background-color: #282828;
			width: 100%;
			padding: .26rem 0;
			border: none;
		}
	}

</style>









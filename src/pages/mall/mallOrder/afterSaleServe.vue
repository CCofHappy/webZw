<template>
	
	<div>
		<yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" color="#282828" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      	</yd-navbar>
      	<yd-tab class="mainTab" v-model="tab1">
	        <yd-tab-panel label="申请售后">
	        	<order-title :status="4" :content="{titleText: '订单编号：123131231231'}"></order-title>
				<order-info></order-info>
            	<order-title :status="3" :content="{type: 'receiveGood', otherBtnText: '申请售后'}" @callBack="clickBtn"></order-title>
            	<div class="segmentation"></div>
            	<order-title :status="4" :content="{titleText: '订单编号：123131231231'}"></order-title>
				<order-info></order-info>
            	<order-title :status="3" :content="{type: 'receiveGood', otherBtnText: '申请售后'}" @callBack="clickBtn"></order-title>
				<order-info></order-info>
            	<order-title :status="3" :content="{type: 'receiveGood', otherBtnText: '申请售后'}" @callBack="clickBtn"></order-title>
            	<div class="segmentation"></div>
            	<order-title :status="4" :content="{titleText: '订单编号：123131231231'}"></order-title>
				<order-info></order-info>
            	<order-title :status="9"></order-title>
            	<div class="segmentation"></div>
            	<order-title :status="4" :content="{titleText: '订单编号：123131231231'}"></order-title>
				<order-info></order-info>
            	<order-title :status="9" :content="{overTime: true}"></order-title>
            	<div class="segmentation"></div>
	        </yd-tab-panel>
	        <yd-tab-panel label="申请记录">
	        	<order-title :status="4" :content="{titleText: '服务单号：23671827'}"></order-title>
	        	<router-link :to="{name:'refundDetail'}">
	               <order-info></order-info>
	            </router-link>
            	<order-title :status="10" :content="{status: '已完成', contentText: '您已成功退款，请注意查收'}"></order-title>
            	<div class="segmentation"></div>
	        	<order-title :status="4" :content="{titleText: '服务单号：127456484'}"></order-title>
				<order-info></order-info>
            	<order-title :status="10" :content="{status: '申请中', contentText: '您已提交仅退款申请'}"></order-title>
            	<div class="segmentation"></div>
	        	<order-title :status="4" :content="{titleText: '服务单号：23671827'}"></order-title>
				<order-info></order-info>
            	<order-title :status="10" :content="{status: '已取消', contentText: '您已取消退货退款申请'}"></order-title>
            	<div class="segmentation"></div>
	        	<order-title :status="4" :content="{titleText: '服务单号：23671827'}"></order-title>
				<order-info></order-info>
            	<order-title :status="10" :content="{status: '退款中', contentText: '请在7天内将商品退回并上传物流单号'}"></order-title>
            	<div class="segmentation"></div>
	        	<order-title :status="4" :content="{titleText: '服务单号：23671827'}"></order-title>
				<order-info></order-info>
            	<order-title :status="10" :content="{status: '已取消', contentText: '您退回的商品有误'}"></order-title>
            	<div class="segmentation"></div>
	        </yd-tab-panel>
	    </yd-tab>
	</div>

</template>


<script>
  	import orderTitle from "../mallPublic/orderTitle"
  	import orderInfo from "../mallPublic/orderInfo"
	export default {
		name: "afterSaleServe",
		data() {
			return {
				tab1: 0
			}
		},
		components: {
			orderTitle,
			orderInfo
		},
		methods: {
			clickBtn(status) {
				console.log(status);
				this.$router.push({ name:"applyRefund" });
			}
		}
	}
</script>

<style lang="less">
	.mainTab {
		.yd-tab-nav {
	      position: fixed;
	      top: 1rem;
	      width: 100% !important;
	      z-index: 99;
	    }
	    .yd-tab-nav-item {
	    	background-color: #F8F8F8;
	    	color: #979797;
	    }
	    .yd-tab-nav .yd-tab-active {
	    	color: #282828;
	    }
	    .yd-tab-nav .yd-tab-active:active {
	    	background-color: #F8F8F8;
	    }
	    .yd-tab-nav-item:not(:last-child):after {
	      	border-right: 3px solid #ffffff;
	      	top: 0;
	      	height: 100%;
	    }
	    .yd-tab-panel {
	      margin-top: 1.9rem;
	      background: none;
	    }
	    .yd-tab-nav .yd-tab-active:before{
	        width: 20%;
	        margin-left: -10%;
	        color: #CD733B;
	    }
	    .yd-tab-nav:after {
	      border-bottom: none;
	    }
	}
	.navbar-bottom-line-color:after {
      border-color: transparent !important;
    }
</style>















<template>
	<div>
		<yd-navbar class="navTitle" title="修改登录密码" fontsize=".36rem" color="#282828" :fixed="true">
	        <span class="iconfont icon-Slicex9" slot="left" @click="$router.go(-1)"></span>
	    </yd-navbar>
	    <div class="content">
	    	<div class="cellContent">
	    		<yd-cell-group>
		            <yd-cell-item>
		                <yd-input slot="left" v-model="input4" placeholder="请输入手机号码"></yd-input>
		            </yd-cell-item>
		            <yd-cell-item>
		                <yd-input slot="left" v-model="input4" placeholder="请输入验证码"></yd-input>
		                <span slot="right">发送验证码</span>
		            </yd-cell-item>
		            <yd-cell-item>
		                <yd-input slot="left" v-model="input4" placeholder="请输入密码"></yd-input>
		            </yd-cell-item>
		            <yd-cell-item>
		                <yd-input slot="left" v-model="input4" placeholder="请再次输入密码"></yd-input>
		            </yd-cell-item>
		        </yd-cell-group>
	    	</div>
	    	<div class="submitBtnDiv">
		    	<button class="submitBtn">提交</button>
		    </div>
	    </div>
	</div>
</template>


<script>
	export default {
		name: "forgetPassword",
		data() {
			return {
				input4: ""
			}
		},
		methods: {
			clickGoBack() {

			}
		}
	}
</script>


<style lang="less">
	
	.content {
		background-color: #F2F2F2;
		position: absolute;
		top: 1rem;
		left: 0;
		right: 0;
		bottom: 0;
		.cellContent {
			margin-top: .22rem;
			margin-left: .24rem;
			margin-right: .24rem;
			.yd-cell {
				border-radius: .1rem;
			}
			span {
				color: #282828;
			}
		}
		.submitBtnDiv {
			margin-top: 1rem;
			margin-right: .48rem;
			margin-left: .48rem;
			button {
				background-color: #282828;
				color: #CD733B;
				font-size: .32rem;
				width: 100%;
				height: .88rem;
			}
		}
	}

	.navTitle {
		span.yd-navbar-center-title {
			font-weight: 500;
		}
	}

</style>



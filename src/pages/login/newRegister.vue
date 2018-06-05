

<template>
	
	<div>
		<div>
			<yd-navbar title="" fontsize=".36rem" color="#282828" :fixed="true">
		        <!-- <router-link :to="{name:'mall'}" slot="left"> -->
		            <span class="iconfont icon-Slicex9" slot="left" @click="clickGoBack"></span>
		        <!-- </router-link> -->
		    </yd-navbar>
		</div>

		<div class="logoImg">
	        <img src="@/assets/logo-3.png" style="margin-top:1rem;margin-bottom: .8rem;">
	    </div>
	    <div class="flex">
	    	<div class="leftIcon">
	    		<span class="iconfont icon--loding-"></span>
	    	</div>
	    	<div class="flex-1">
	    		<div class="flex">
	    			<span style="margin-right: .2rem;">+86</span>
	    			<yd-input v-model="phoneNum"  data-vv-name="手机号码" v-validate="'required|mobile'" placeholder="请输入手机号码"></yd-input>
	    		</div>
	    		<div class="segmentation" style="height: 1px;margin-top: .1rem;"></div>
	    	</div>
	    </div>
	    <div class="flex middleDiv">
	    	<div class="leftIconCode">
	    		<span class="iconfont icon--loding-1"></span>
	    	</div>
	    	<div class="flex-1">
	    		<div class="flex codeInput">
	    			<yd-input v-model="verifyCode" placeholder="请输入验证码"></yd-input>
	    			<button class="codeRightBtn" @click="clickSendCode">{{verifyCodeText}}</button>
	    		</div>
	    		<div class="segmentation" style="height: 1px;margin-top: .1rem;"></div>
	    	</div>
	    </div>
	    <div class="userAgreement">
	    	<span>点击注册，即表示您同意<a @click="clickUserProtocol">《用户协议》</a></span>
	    </div>
	    <div class="loginBtnDiv isRegister">
	    	<button class="loginBtn">注册</button>
	    </div>
	</div>

</template>


<script>
	export default {
		name: "newLogin",
		data() {
			return {
				phoneNum: "",
				verifyCode: "",
				verifyCodeText: "发送验证码"
			}
		},
		methods: {
			clickGoBack() {
				this.$router.push({name: "login"});
			},
			clickUserProtocol() {
				this.$router.push({name: "userRegisterProtocol"});
			},
			clickSendCode() {
				validForm(this,this.sendCode);
			},
			sendCode() {
				fly.post('app/person/sendSMSCode',{smsText:'verifyCode',telephone:this.phoneNum, template:'register'})
		        .then((res) => {
		          if(res.state) {
		            this.$dialog.toast({ mes:'已发送'});
		          } else {
		            this.$dialog.toast({ mes:res.message });
		          }
		        })
			}
		},
		mounted() {

		}
	}
</script>


<style lang="less" scoped>
	
	.flex {
		.leftIcon {
			margin-left: .56rem;
			margin-right: .28rem;
			color: #282828;
		}
		.leftIconCode {
			margin-left: .52rem;
			margin-right: .26rem;
			color: #282828;
		}
		.flex-1 {
			margin-right: .48rem;
		}
	}

	.middleDiv {
		margin-top: .8rem;
	}

	

	.codeInput {
		.yd-input {
			width: 2rem;
		}
		.codeRightBtn {
			position: absolute;
			right: 0;
			border: none;
			color: #282828;
			font-size: .26rem;
		}
	}
	.loginBtnDiv {
		margin-top: 1rem;
		margin-left: .48rem;
		margin-right: .48rem;
		button {
			background-color: #282828;
			height: .88rem;
			color: #656565;
			width: 100%;
		}
	}
	.isRegister {
		margin-top: .8rem;
	}
	.lastDiv {
		margin-top: .4rem;
		margin-left: .48rem;
		margin-right: .48rem;
		button {
			border: none;
			font-size: .26rem;
		}
		.forgetPasswordBtn {
			color: #979797;
		}
		.registerBtn {
			color: #282828;
			position: absolute;
			right: .48rem;
		}
	}
	
	.userAgreement {
		margin-top: .4rem;
		margin-left: .48rem;
		font-size: .26rem;
		span {
			color: #979797;
		}
		a {
			color: blue;
		}
	}

	.navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}

</style>

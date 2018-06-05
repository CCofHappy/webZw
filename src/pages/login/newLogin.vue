

<template>
	
	<div>
		<div>
			<yd-navbar title="" fontsize=".36rem" color="#282828" :fixed="true">
		            <span class="iconfont icon-Slicex9" slot="left" @click="$router.go(-1)"></span>
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
	    			<span class="margin-right-sm">+86</span>
	    			<yd-input v-model="phoneNum" data-vv-name="手机号码" v-validate="'required'" placeholder="输入手机号码"></yd-input>
	    		</div>
	    		<div class="segmentation"></div>
	    	</div>
	    </div>
	    <div class="flex middleDiv">
	    	<div class="leftIconCode">
	    		<span class="iconfont icon--ballet-4"></span>
	    	</div>
	    	<div class="flex-1">
	    		<div class="flex codeInput">
	    			<yd-input v-model="password" type="password" data-vv-name="登录密码" v-validate="'required'" placeholder="请输入密码"></yd-input>
	    		</div>
	    		<div class="segmentation"></div>
	    	</div>
	    </div>
	    <div class="loginBtnDiv">
	    	<yd-button size="large" bgcolor="#282828" :color="color" class="fs14" @click.native="validateBeforeSubmit">登录</yd-button>
	    </div>
	    <div class="lastDiv">
	    	<button class="forgetPasswordBtn" @click="clickForgetPassword">忘记密码</button>
	    	<button class="registerBtn" @click="clickRegister">注册</button>
	    </div>
	</div>

</template>


<script>
	export default {
		name: "newLogin",
		data() {
			return {
				phoneNum: "",
				password: "",
				color:'#656565'    //登录按钮的字体颜色
			}
		},
		methods: {
			clickRegister() {
				this.$router.push({name: "register"});
			},
			clickForgetPassword() {
				this.$router.push({name: "replace"});
			},
			clickLogin() {
				fly.post('app/person/login',{'customerLogin':this.phoneNum,'customerPwd':md5(this.password)})
		        .then(res => {
		          if(res.state) {
		             Cookie.set('token',res.data.etoken,{expires:10});     //把token存到cookie
		             Cookie.set('userSeq',res.data.customerSeq,{expires:10});     //把用户seq存到cookie
		             let path = this.$route.query.redirect ? this.$route.query.redirect : '/'
		             this.$router.replace(path)  //登录成功后跳转到登录前的页面
		             this.$dialog.toast({ mes:'登录成功'});
		          } else {
		            this.$dialog.toast({ mes:res.message });
		          }
		        })
			},
			validateBeforeSubmit() {
		      validForm(this,this.clickLogin)
		    }
		},
		mounted() {
			// this.isRegister = this.$route.meta.title=="登录"?false:true;
		},
		watch: {
			//监听密码输入框。当密码和账号都不为空的时候。改变按钮的字体颜色
			password() {
				if(this.phoneNum != '' && this.password != ''){
					this.color = '#CD733B'
				}else {
					this.color = '#656565'
				}
			}
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
			margin-left: .56rem;
			margin-right: .28rem;
			color: #282828;
		}
		.flex-1 {
			margin-right: .48rem;
		}
	}

	.middleDiv {
		margin-top: .8rem;
	}

	.segmentation {
		height: 1px;
		margin-top: .1rem;
	}

	.codeInput {
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

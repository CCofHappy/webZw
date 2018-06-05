

<template>
	
	<div>
		<div>
			<yd-navbar title="中威网用户注册协议" class="navTitle" bgcolor="#F8F8F8" fontsize=".36rem" color="#282828" :fixed="true">
		        <span class="iconfont icon-Slicex9" slot="left" @click="$router.go(-1)"></span>
		    </yd-navbar>
		</div>
		<div class="protocolContent">
			<div class="protocolRemark">
				<p>本协议由您与惠州市中威酒业有限公司共同缔结，本协议具有合同效力。 </p>
				<p>本协议中协议双方合称协议方，惠州市中威酒业有限公司在协议中亦称为"中威网"。(域名为www.cwhisky.com)</p>
			</div>
			<div v-for="item,key in contentData">
				<p class="padding-top-40 contentTitle fs16">{{item.title}}</p>
    			<p class="fs14 content" :class="{lastContent: key==(contentData.length-1)}">{{item.detail}}</p>
			</div>
		</div>
	</div>

</template>


<script>
	export default {
		name: "userRegisterProtocol",
		data() {
			return {
				contentData: [
					{
						title: "一、 协议内容及签署",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					},
					{
						title: "二、 注册",
						detail: "第一条：规则制定 本规则根据《中华人民共和国拍卖法》及其它有关法律、法规及本公司章程。"
					},
					{
						title: "三、会员帐号、密码及安全",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					},
					{
						title: "四、注册会员的义务及承诺",
						detail: "第一条：规则制定 本规则根据《中华人民共和国拍卖法》及其它有关法律、法规及本公司章程。"
					},
					{
						title: "五、广告",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					},
					{
						title: "六、 知识产权的保护",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					},
					{
						title: "七、隐私权政策",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					},
					{
						title: "八、法律适用、管辖与其它",
						detail: "第一条：规则制定 本规则根据《中华人民共和国》。"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.protocolContent {
		position: absolute;
		top: 1rem;
		left: 0;
		right: 0;
		bottom: 0;
		margin-right: .24rem;
		margin-left: .24rem;
		.protocolRemark {
			margin-top: .8rem;
			p {
				color: #282828;
			}
		}
		.contentTitle {
			color: #282828;
			font-weight: 600;
		}
		.content {
			color: #282828;
			padding-top: .2rem;
		}
		.lastContent {
			padding-bottom: .8rem;
		}
	}
	.navTitle {
		.yd-navbar-center-title {
			font-weight: 500;
		}
	}

	.navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}

</style>



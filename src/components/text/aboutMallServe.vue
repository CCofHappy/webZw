<!-- 
remarkType 取值为contentData的下标
0代表 中威网服务
1代表 拼团规则
2代表 摇号规则

 -->

<template>
	
	<div class="bottomContent padding-left-xm">
		<p v-if="contentData[remarkType].subTitle" class="padding-top-40 dgray">{{contentData[remarkType].subTitle}}</p>
    	<div v-for="item,key in contentData[remarkType].contentDetail">
    		<p class="padding-top-40 contentTitle fs16">{{item.title}}</p>
    		<pre class="fs14 content" :class="{lastContent: key==(contentData[remarkType].contentDetail.length-1)}">{{item.detail}}</pre>
    	</div>
    </div>

</template>

<script>
	export default {
		name: "aboutMallServe",
		props: ['remarkType'],
		data() {
			return {
				contentData:[
					{
						contentDetail: [
							{
								title: "正品保证",
								detail: "100%正品保证，每一件投递到您手中的商品都经历层层检查，确保 100%完美无缺。"
							},
							{
								title: "破损包赔",
								detail: "成交后，如果因运输不当造成的破损，中威网承担全部损失。因为酒的特殊性，运输过程中可能会造成轻微漏酒，属正常现象，漏酒在5%以内，中威网不承担责任，超出5%时，客户有权退货。"
							},
							{
								title: "7天退换",
								detail: "商品自签收次日起7天内无理由退货。\n限时抢购、预售、拼团、摇号不支持7天无理由退换货。"
							},
							{
								title: "满300包邮",
								detail: "广东省内15元/单；广东省外25元/单（不限重）。\n订单满300国内包邮。\n暂不支持港澳台及海外订单。"
							}
						]
					},
					{
						subTitle: "在活动期间内，参团人数需达到10人或以上",
						contentDetail: [
							{
								title: "拼团活动",
								detail: "在活动期间，选择拼团商品下单并完成支付即为参团，参团人数需在活动时间内达到规定人数，此团方能成功；超过活动期，或者直至截止时间仍不满团购人数，均为失败。"
							},
							{
								title: "拼团成功",
								detail: "在活动期间内，所有团成员完成支付后，订单状态即会变成“待发货”，当拼团人数达到规定时，我们即为每个团员进行发货。"
							},
							{
								title: "拼团失败",
								detail: "在活动期间内，拼团人数未能达到规定，为拼团失败。系统将在3个工作日内提交处理，之后会退款到拼团失败用户的中威钱包。"
							},
							{
								title: "邀请好友",
								detail: "在活动期间内，分享拼团商品链接给好友，邀请好友拼团，可以提高拼团成功率。"
							}
						]
					},
					{
						subTitle: "缴纳报名费参与摇号，摇中者方可购买",
						contentDetail: [
							{
								title: "摇号玩法",
								detail: "在规定时间内缴纳报名费参与摇号，缴纳报名费之后会随机获得一个参与摇号的编号，系统自动在众多编号中随机抽取，摇中者即可购买；每人限购1件。"
							},
							{
								title: "摇号成功",
								detail: "摇号后我们将公布摇中者名单，摇中者需在2日内完成购买，否则视为弃权。"
							},
							{
								title: "摇号失败",
								detail: "摇号失败的用户，我们将在2个工作日内将报名费退还至中威钱包。"
							}
						]
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>

	.bottomContent {
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
		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
		}
	}
	
</style>


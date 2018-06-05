<!-- 可删除 -->
<template>
	<div class="bottomContent padding-left-xm">
    	<p class="padding-top-40 dgray">在活动期间内，参团人数需达到10人或以上</p>
    	<!-- 也可以写成组件，使用的时候用 v-for 遍历 -->
    	<p class="padding-top-40 contentTitle fs16">拼团活动</p>
    	<pre class="fs14 content">在活动期间，选择拼团商品下单并完成支付即为参团，参团人数需在活动时间内达到规定人数，此团方能成功；超过活动期，或者直至截止时间仍不满团购人数，均为失败。</pre>
    	<p class="padding-top-40 contentTitle fs16">拼团成功</p>
    	<pre class="fs14 content">在活动期间内，所有团成员完成支付后，订单状态即会变成“待发货”，当拼团人数达到规定时，我们即为每个团员进行发货。</pre>
    	<p class="padding-top-40 contentTitle fs16">拼团失败</p>
    	<pre class="fs14 content">在活动期间内，拼团人数未能达到规定，为拼团失败。系统将在3个工作日内提交处理，之后会退款到拼团失败用户的中威钱包。</pre>
    	<p class="padding-top-40 contentTitle fs16">邀请好友</p>
    	<pre class="fs14 content lastContent">在活动期间内，分享拼团商品链接给好友，邀请好友拼团，可以提高拼团成功率。</pre>
    </div>
</template>

<script>
	export default {
		name:"ruleRemark",
		data() {
			return {

			}
		}
	}
</script>



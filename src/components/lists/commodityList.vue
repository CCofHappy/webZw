
<!-- 
字段说明
img：图片路径
title：标题
subtitle：副标题
price：价格（不需要带￥）
 -->

<template>
	
	<yd-list-item class="goodsListItem">
	  <img slot="img" :src="itemData.img">
	  <span slot="title">{{itemData.title}}</span>
	  <yd-list-other slot="other" class="commodityDetails">
	      <p class="wineDetails">{{itemData.subtitle?itemData.subtitle:"副标题"}}</p>
	      <p class="winePrice">￥{{itemData.price?itemData.price:"10000"}}<span style="padding-left: .28rem;"><i class="iconfont">&#xe65a;</i></span></p>
	  </yd-list-other>
	</yd-list-item>

</template>

<script>
    export default {
        props: ['itemData'],
        data() {
            return {
             
            
            }
        },
        methods: {
            
        },
        mounted() { 
        	
      },
        
    }
</script>

<style scoped>
	
	.commodityDetails {display: block; padding-top: .1rem;}

	.wineDetails {padding-bottom: .1rem;}

	.winePrice { font-size: .32rem; color: #C93B00; }

	.goodsListItem { position: static; }

</style>


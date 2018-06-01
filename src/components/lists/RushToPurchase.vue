<!-- 
字段解析：
title：标题
details：详细（副标题）
img：图片路径
describe：描述
number：带单位的数量
 -->

<template>
	
    <yd-list-item style="padding-top: .4rem; padding-bottom: .4rem;">
        <img slot="img" :src="itemData.img">
        <span slot="title">{{itemData.title}}</span>
        <yd-list-other slot="other">
            <div>
                <span class="demo-list-price">{{itemData.details?"轻井泽 能 22年 1994-2016 #7640":"轻井泽 能 22年 1994-2016 #7640"}}</span>
                <yd-flexbox v-if="purchaseType" style="margin-top: .16rem;">
                    <yd-flexbox-item><yd-progressbar class="progress" type="line" :progress="itemData.progress?0.8:0.6" trail-width="8" stroke-width="8" trail-color="#FDB081"></yd-progressbar></yd-flexbox-item>
                    <div>&nbsp;&nbsp;&nbsp;</div>
                    <yd-flexbox-item class="flexbox-fontSize">剩余200件</yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox v-if="!purchaseType" style="margin-top: .16rem;">
                    <yd-flexbox-item class="flexbox-fontSize">已有20人预览</yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox class="flexBottom">
                    <div class="discount" :class="{fontColorBlack:!purchaseType}">￥10000</div>
                    <yd-flexbox-item class="originalPrice">￥13000</yd-flexbox-item>
                </yd-flexbox>
                <yd-button class="performBtn" :bgcolor="purchaseType?'#282828':'#F2F2F2'" :color="purchaseType?'#FFF':'#CD733B'">{{purchaseType?"马上抢":"预售中"}}</yd-button>
            </div>
        </yd-list-other>
    </yd-list-item>

</template>

<script>
    export default {
        props: ['itemData','purchaseType'],
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
	
  .progress {width:2.4rem;}
  .yd-progressbar svg {height:.2rem;}
  .yd-list-other {color: #424040;}
  .discount {font-size: .36rem; color: #C93B00; padding-right: .1rem;}
  .fontColorBlack {color: #282828}
  .originalPrice {font-size: .24rem; text-decoration: line-through;}
  .flexBottom {position: absolute; bottom: .3rem;}
  .performBtn {position: absolute; right:.2rem; bottom: .3rem; color:#CD733B!important;}
  .demo-list-price { font-size: .28rem; color: #282828; }
  .flexbox-fontSize {font-size:.2rem;}

</style>


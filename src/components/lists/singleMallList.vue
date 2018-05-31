<!-- 
字段解析：
path：路由路径
title：标题
details：详细（副标题）
img：图片路径
describe：描述
number：带单位的数量
 -->

<template>
	
	<div class="lists padding-top-md">
    <router-link :to="itemData.path">
      <div class="child">
        <b class="cntitle">{{itemData.title}}<span class="gray rightSpan">{{itemData.describe}}<span class="fred">{{itemData.number}}</span></span></b>
        <p class="entitle">{{itemData.details}}</p>
        
      </div>
    </router-link>
      <yd-list theme="5">
          <yd-list-item>
              <img slot="img" :src="itemData.img">              
          </yd-list-item>
      </yd-list>
   </div>

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
	
  .child {position:relative;}
  .child p {padding-top: 8px;}
  .rightSpan {position: absolute; font-size: 12px; right:0px;}

</style>


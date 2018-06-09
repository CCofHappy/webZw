<!--社区首页头部-->
<template>
  <div>
     <header>
     	<div class="title">
     		<span class="span" style="font-size: 0.54rem;">社区</span>
     		<router-link  to="/" class="padding-top-sm margin-left-sm span">规则</router-link >
     		<p class="pull-right padding-top-xs">
     			<router-link to="/" class="fs20 margin-right-md">
     				<i class="iconfont icon--search"></i>
     			</router-link>
     			<router-link to="/" class="fs20">
     				<i class="iconfont icon--write"></i>
     			</router-link>
     		</p>
     	</div>
     	<img class="headerImg" src="@/assets/share-entrance.jpg" />
     </header>
  </div>
</template>

<script>
export default {
  components: {
    },
  data () {
    return {
      
    }
  },
  computed: {
      
  },
  methods: {
  	
  },
  mounted() {
     
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
.title {
	 padding: .3rem .24rem 0 .24rem;
	.span {
		display: inline-block;
		height: 1rem;
		vertical-align: text-top;
	}
}
.headerImg {
 	width: 100%;
 	height: 1.6rem;
 }
</style>

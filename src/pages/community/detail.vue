<template>
  <div>
  	<titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
  	<div class="padding-sm">
  		<p class="fs24 margin-top-md">独一无二的酒局盛宴</p>
  		 <header class="clearfix margin-top-md">
	  		<img class="itemImg" src="@/assets/label/v.png">
	  		<div class="pull-left">
	  			<p class="fs16">
	  				吴秀波
	  				<span class="level margin-left-xs" style="top: -2px;">Lv.11</span>
	  				<img   class="vlabel"  src="@/assets/label/v.png" />
	  			</p>
	  			<p class="fs12 grayd margin-top-xs">01</p>
	  		</div>
	  		<!--<yd-button v-if="item.isFollow" type="hollow" class="pull-right sky-btn fs13" color="#979797">已关注</yd-button>-->
	  	 	<yd-button  class="pull-right sky-btn sky-btn-fred fs13"  type="hollow" @click.native="follow"><i class="iconfont icon-plus-add fs12" style="top: -1px;"></i> 关注</yd-button>
	  	</header>
	  	<div class="main">
	  		<p class="fs16">
	  			        在生活中，令我们感动得人有许许多多，但是有一个人却让我刻骨铭心。　　↵        一个冬天的晚上，爸爸妈妈还在上班，我就和姐姐在家看电视。突然一阵凉风从没有关紧的窗子外飞来，接二连三又来了许多阵，自然我防不胜防，一下子就感冒了。姐姐见此情况，连忙给我喂了一根棒棒糖，还问我有味道没有？我说没有，姐姐一听：“肯定感冒了！”我俩不约而同地向四周看了一下，没人。“那怎么办，怎么办……”就在这时，从来不走夜路的姐姐毫不犹豫地把软弱无力的我吃力地扶上了街。医生说没什么大问题，开了药后，就回家了。一路上，我望着姐姐苍白的脸，她好像是害怕四周突然有狗扑上来的样子，一刹那间，我的泪水一下子就从眼眶里涌了出来，姐姐一看就明白了，将我紧紧地抱了起来，一直不愿放手，在这短暂的时刻里，我仿佛明白了什么叫亲情。　　↵        经过这件事后，我对姐姐越来越好了，一天没看见她心里就不快活。↵
	  		</p>
	  	</div>
  	</div>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  components: {
      titleHead
    },
  data () {
    return {
      postData:{
      	pid:this.$route.params.pid,
      	uid:this.$route.params.uid,
      	page:1,
      	rows:10,
      	type:'3'
      }
    }
  },
  computed: {
      
  },
  methods: {
  	getData(){
  		this.api.postDetail(this.postData)
  		.then((res) => {
  			console.log(res)
  		})
  	}
  },
  mounted() {
     this.getData()
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
  .itemImg {
 	float: left;
 	width: .8rem;
 	height: .8rem;
 	border-radius: 100%;
 	margin-left: .1rem;
 	margin-right: .3rem;
 }
  .vlabel {
 	width: 0.32rem; 
 	position: relative; 
 	top: .04rem;
 }
 .label {
 	position: relative;
 	display: inline-block;
 	color: #CC723C;
 	border: 1px solid #CC723C;
  padding: .02rem .16rem;
  font-size: 0.2rem;
  transform:scale(0.9);
  top: -.03rem;
 }
 .imgBox {
 	margin-bottom: 0.3rem;
 	margin-left:-.2rem;
 	img {
 		width: 2.1rem;
 		height: 2.1rem;
 		margin-left: .2rem;
 		margin-bottom: .2rem;;
 	}
 }
 .main {
 	 margin-top: .6rem;
 }
</style>

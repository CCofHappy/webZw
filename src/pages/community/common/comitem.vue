<template>
  <div class="itembox">
  	<header class="clearfix">
  		<img class="itemImg" :src="item.customerImgUrl">
  		<div class="pull-left">
  			<p class="fs16">
  				{{item.name}}
  				<span class="level margin-left-xs" style="top: -2px;">Lv.{{item.level}}</span>
  				<img v-if="item.v" class="vlabel"  src="@/assets/label/v.png" />
  			</p>
  			<p class="fs12 grayd margin-top-xs">{{formtDate(item.createTime,4)}}</p>
  		</div>
  		<yd-button v-if="item.isFollow" type="hollow" class="pull-right sky-btn fs13" color="#979797">已关注</yd-button>
  	 	<yd-button v-else class="pull-right sky-btn sky-btn-fred fs13"  type="hollow" @click.native="follow"><i class="iconfont icon-plus-add fs12" style="top: -1px;"></i> 关注</yd-button>
  	</header>
  	<router-link :to="{name:'communityDetail',params:{pid:item.pid,uid:item.uid}}" class="main">
  		<div class="clearfix">
  			<p class="title pull-left margin-top-md">
  				<!--精，根据小程序判断逻辑，label下有标签的时候就算精贴，分享吧是没有精的，所以要判断type不等于1-->
  				<span v-if="item.label.length && type!=1">
  					<i class="iconfont icon-CombinedShape" style="top: 0; color: #C93B00;"></i>
  				</span>
	  			<span class="fs18 fw600">{{item.title}}</span>
  			</p>
  			<!--评分，只有酒评贴才有-->
  			<span v-if="item.totalScore" class="pull-right gray"><span class="fs27 forange">{{item.totalScore}}</span>分</span>
  		</div>
  		<p class="content" v-if="type!=1">
  			{{item.content}}
  		</p>
  		<!--倒计时，等接口完善后再修改-->
  		<div class="margin-top-sm" v-if="type==1">
  			<yd-countdown :time="666666" timetype="second"></yd-countdown>
  		</div>
  		<table class="table table-bordered text-center margin-top-md" v-if="type==1">
  			<tbody>
  				<tr>
	  				<td class="sky-title">限购数</td>
	  				<td>{{item.limitations?item.limitations+"份":"不限"}}</td>
	  				<td class="sky-title">成团数</td>
	  				<td>{{item.minNumber?item.minNumber+"份":"不限"}}</td>
	  				<td  class="sky-title">已售</td>
	  				<td>{{item.sold?item.sold:0}}份</td>
	  			</tr>
	  			<tr>
	  				<td class="sky-title">净含量</td>
	  				<td>{{item.netContent}}</td>
	  				<td class="sky-title">酒精度</td>
	  				<td>{{item.alcoholContent}}</td>
	  				<td class="sky-title">分享数</td>
	  				<td>{{item.number}}份</td>
	  			</tr>
	  			<tr>
	  				<td class="sky-title">品牌</td>
	  				<td colspan="2">
	  					<span class="textfir" style="max-width: 2rem;">
	  						{{item.brand}}
	  					</span>
	  				</td>
	  				<td class="sky-title">价格</td>
	  				<td colspan="2">
	  					<span class="red">{{item.price}}</span>元/份
	  				</td>
	  			</tr>
  			</tbody>
  		</table>
  			<yd-lightbox class="imgBox">
	        <yd-lightbox-img v-for="img, key in item.imgUrl" :key="key" :src="img.url"></yd-lightbox-img>
	    </yd-lightbox>
	    <div class="margin-bottom-sm" v-if="type == 1">
	    	<span v-for='label in item.label' class="fs10">
	  				<span class="label">
		  				{{label.name}}
		  			</span>
	  			</span>
	    </div>
  	</router-link>
  	<footer class="footer">
  		<span class="grayd fs12">{{item.scanCount ? item.scanCount : 0}}次浏览</span>
  		<p class="pull-right">
  			<span class="margin-right-lg"><i class="iconfont icon--information"></i> {{item.replyCount}}</span>
  			<!--是否点赞过-->
  			<span class="margin-right-lg" v-if="item.isPraise" ><img src="@/assets/label/praise.png" style="width: 0.3rem;" /> {{item.praise}}</span>
  			<span class="margin-right-lg" v-else  @click="praise"><img src="@/assets/label/noPraise.png" style="width: 0.3rem;" /> {{item.praise}}</span>
  			<span><i class="iconfont icon--money"></i> {{item.uCount}}</span>
  		</p>
  	</footer>
  </div>
</template>

<script>
 
export default {
	props: ['item','type','tab'],    //type---帖子类型 1：分享帖，2：酒评贴，3交流贴
  components: {
  		 
    },
  data () {
    return {
      
    }
  },
  computed: {
      
  },
  methods: {
  	//点赞
  	praise(){
  		this.api.insertPostPraise({
  			pid:this.item.pid,
  			uid:Cookie.get('userSeq'),
  			type:this.type
  		})
  		.then((res) => {
  			if(res.state){
  				this.item.isPraise = 1;
  				this.item.praise++;
  			}
  		})
  	},
//	关注
		follow(){
			if(Cookie.get('userSeq')){
				this.api.follow({
					followUid:this.item.uid,
	  			uid:Cookie.get('userSeq'),
				})
				.then((res) => {
	  			if(res.state){
	  				this.$emit('getData',this.item);
	  			}
	  		})
			}else {
				this.local.set('tab',this.tab);
				this.$router.push({
                path: '/login',
                query: {redirect: this.$route.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
			}
			
		}
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
 .itembox {
 	padding: .6rem .24rem .4rem .24rem;
 }
 .itemImg {
 	float: left;
 	width: .8rem;
 	height: .8rem;
 	border-radius: 100%;
 	margin-left: .1rem;
 	margin-right: .3rem;
 }
 .main {
 	margin-top: .6rem;
 	.title {
			display:block;
			width: 75%;
		  white-space:nowrap;
		  overflow:hidden;
		  text-overflow:ellipsis;
		 	}
 	.content {
 		position: relative;
 		margin-top: .4rem;
 		margin-bottom: .4rem;
 		color: #656565;
 		overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: initial;
    }
    
 	}
 .footer {
 			padding-top: .4rem;
    	border-top: 1px solid #F2F2F2;
    	padding-bottom: .2rem;
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
</style>

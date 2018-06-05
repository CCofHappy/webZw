<template>
  <div>
      <titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
      <div class="list-child padding-left-md">
      	<img class="imgSize50 pull-left" src="../../assets/default/jiu2.jpg" />
      	<div class="margin-left-md" style="display: inline-block;">
      		<p><span class="gray">物流公司：</span>{{info.expressChina ? info.expressChina : '正在出库中' }}</p>
      		<p class="margin-top-sm"><span class="gray">物流编号：</span>{{info.expressNumber ? info.expressNumber : '正在出库中' }}</p>
      	</div>
      </div>
     <yd-timeline class="sky-timeline-l margin-top-md">
     		<yd-timeline-item v-for="item,key in data" :key="key" :class="[key == 0 ? 'greend' : 'grayd']">
     				<p v-if="key==0" class="fs16">已签收</p>
     				<p v-if="key+1 == data.length && data.length > 1" class="fs16">已揽件</p>
            <p class="fs12">{{item.conText}}</p>
            <time class="ftime">{{item.ftime | replaceTime}}</time>
            <i slot="icon" class="iconfont icon-Slice10"></i>
        </yd-timeline-item>
        <yd-timeline-item class="grayd" v-if="data.length == 1">
     				<p class="fs16">已揽件</p>
            <i slot="icon" class="iconfont icon-Slice10"></i>
        </yd-timeline-item>
    </yd-timeline>
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
      postData: {
      	nu: this.$route.params.Oseq
      },
      data:[],   //物流进度信息
      info: {},  //物流公司信息
    }
  },
  computed: {
      
  },
  methods: {
  	
  },
  mounted() {
     this.api.getDelDes(this.postData)
     .then((res) => {
     	if(res.state){
     		this.data = res.data.data
     		this.info = res.data.info
     	}else{
     		console.log(res)
     	}
     	
     })
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped>
 .greend {
 	color: #589A0D;
 }
 .grayd {
 	color: #979797;
 }
 .ftime{
 	font-size: 0.32rem;
 	    position: absolute;
    top: 0;
    left: -1.6rem;
    white-space: normal;
    word-wrap: break-word;
    width: 1rem;
 }
 .grayd .ftime {
 	 top: .3rem;
 }
</style>

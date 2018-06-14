<!-- 
需要传入参数：
数据源：（格式：毫秒时间戳差值）======== startTimeOverplus--距开始       endTimeOverplus--距结束
类型： type    具体类型效果参考img里的图片
 
 -->
<template>
  <div class="timeBox fs12">
  	<div v-if="type == 1">
	  <span class="gray">{{ timeState }}：</span>
      <yd-countdown :time="timeData"  timetype="second" :callback="endUpdate">
        <span><span class="timeSpan" >{%d}天</span> :</span>
        <span class="timeSpan">{%h}</span> :
        <span class="timeSpan">{%m}</span> :
        <span class="timeSpan">{%s}</span>
      </yd-countdown>
  	</div>
     
  </div>
</template>

<script>
 
export default {
  props: ['startTimeOverplus', 'endTimeOverplus','type'],
  components: {
 
    },
  data () {
    return {
      timeState: '',
      timeData: null,
    }
  },
  computed: {
      
  },
  methods: {
    // 计算时间差，判断是预展中还是拍卖中
  	update(){
      if(this.startTimeOverplus > 0){
        this.timeData = this.startTimeOverplus/1000;
        this.timeState = '距开始'
      }else {
         this.timeData = this.endTimeOverplus/1000;
        this.timeState = '距结束'
      }
    },
    endUpdate() {
      this.$emit('endCallback')
    }
  }, 
  mounted() {
    this.update()
  },
  // 由于数据是由父组件异步请求获得的，所以这里一定要使用监听
  watch: {
    startTimeOverplus() {
       this.update();
    }
  }
}
</script>

<style scoped lang="less">
 .timeBox {
    text-align: left;
    padding-bottom: .2rem;
    .timeSpan {
      background:#272727;
      color:#FFFFFF;
      padding:2px;
    }
 }
</style>

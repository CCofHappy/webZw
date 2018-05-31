<!-- 
需要传入参数：
数据源：开始日期/结束日期/服务器时间（格式：毫秒时间戳）======== startDate endDate serverTime
倒计时类型：（每日一拍的当天倒计时不显示天数，每日一拍的预展，普通拍卖显示天数）======== dateType
1.每日一拍的预展，普通拍卖显示天数
0.每日一拍的当天倒计时
 -->
<template>
  <div class="timeBox fs12">
     <span class="gray">{{ timeState }}：</span>
      <yd-countdown :time="timeData"  timetype="second" :callback="endUpdate">
        <span v-if="dateType == 1"><span class="timeSpan" >{%d}天</span> :</span>
        <span class="timeSpan">{%h}</span> :
        <span class="timeSpan">{%m}</span> :
        <span class="timeSpan">{%s}</span>
      </yd-countdown>
  </div>
</template>

<script>
 
export default {
  props: ['startDate', 'endDate', 'serverTime','dateType'],
  name: 'countdown-a',
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
      if(this.startDate > this.serverTime){
        this.timeData = (this.startDate - this.serverTime)/1000;
        this.timeState = '距开始'
        // console.log('timeData',this.timeData);
      }else {
        this.timeData = (this.endDate - this.serverTime)/1000;
        this.timeState = '距结束'
        // console.log('timeData',this.timeData);
      }
    },
    endUpdate() {
      if (this.timeState == '距开始') {
        this.timeData = (this.endDate - this.serverTime)/1000;
        this.timeState = '距结束'
      } else {
        
      }
    }
  }, 
  mounted() {
    this.update()
  },
  // 由于数据是由父组件异步请求获得的，所以这里一定要使用监听
  watch: {
    serverTime() {
       this.update();
       // 调试检查每次下拉刷新或者滚动更新的时候有刷新服务器时间
       // console.log(this.serverTime)
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

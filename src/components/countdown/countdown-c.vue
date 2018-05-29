<!--
需要传入参数：
数据源：开始日期/结束日期/服务器时间（格式：毫秒时间戳）======== startDate endDate serverTime
 -->
<template>
  <div>
    <div class="timeBox opacity09" v-if="badge">
        <i class="iconfont icon-Slice"></i><span class="margin-left-xs margin-right-sm">{{ timeState }}</span>
        <yd-countdown :time="timeData"  timetype="second">
          <span class="timeSpan">{%d} 天</span> <span class="timeSpan">{%h} 小时</span><span class="timeSpan"> {%m} 分</span><span class="timeSpan"> {%s} 秒</span>
        </yd-countdown>
    </div>
  </div>
</template>

<script>

export default {
  props: ['startDate', 'endDate', 'serverTime'],
  name: 'countdown-c',
  components: {

    },
  data () {
    return {
      timeState: '',
      timeData: null,
      badge:false,
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
        this.badge = true;
        // console.log('timeData',this.timeData);
      }else {
        this.timeData = (this.endDate - this.serverTime)/1000;
        if(this.timeData > 0){
          this.badge = true;
        }
        this.timeState = '距结束'
        // console.log('timeData',this.timeData);
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
    }

  }
}
</script>

<style scoped lang="less">
 .timeBox {
   padding-left:.2rem;
   width: 100%;
   height: 0.64rem;
   background: #D1804E;
   line-height: 0.64rem;
   color: #FBF5F1;
 }
</style>

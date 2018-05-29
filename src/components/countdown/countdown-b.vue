<!-- 
延时
只显示延时多少分钟和秒，最多不会超过9分59秒
需要传入参数
1.服务器时间
2.结束时间
 -->
<template>
  <div class="timeBox fs12">
   <span class="fred">延时：</span>
    <yd-countdown :time="timeData"  timetype="second">
      <span class="timeSpan">{%m}</span> 分
      <span class="timeSpan">{%s}</span> 秒
    </yd-countdown>
</div>
</template>

<script>
// import headNav from '@/components/common/head'
export default {
  props: ['endDate', 'serverTime'],
  components: {
        // headNav
    },
  data () {
    return {
      timeData:null,
    }
  },
  computed: {
      
  },
  methods: {
  	update(){
        this.timeData = (this.endDate - this.serverTime)/1000;
    }
  },
  mounted() {

  },
  watch: {
    serverTime() {
       this.update();
    }
  }
}
</script>

<style scoped>
 
</style>

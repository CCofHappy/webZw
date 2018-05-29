<template>
  <div style="height: 1rem;"  v-if="Number(this.$localStorage.get('client'))">
    <yd-tabbar :fixed="fixed">
        <yd-tabbar-item title="拍卖" link="/" :active="$route.name =='home'">
            <i slot="icon" class="iconfont icon-Slicex2"></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="商城" link="/mall" :active="$route.name =='mall'">
            <i slot="icon" class="iconfont icon-Slicex3"></i>
        </yd-tabbar-item>
         <yd-tabbar-item title="社区" link="#">
            <i slot="icon" class="iconfont icon-Slicex1"></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="资讯" link="#">
            <i slot="icon" class="iconfont icon-Slicex6"></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="/user" :active="$route.name =='user'">
            <i slot="icon" class="iconfont icon-Slicex7"></i>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
// import headNav from '@/components/common/head'
export default {
  props:['fixed'],
  name: 'Tabbar',
  components: {
        // headNav
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

<style scoped>
 .iconfont {
  font-size: 0.54rem;
 }
 .yd-tabbar-active, .yd-tabbar-active .iconfont {
    color: black;
    font-weight: 600;
}
</style>

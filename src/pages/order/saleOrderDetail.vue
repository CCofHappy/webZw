<template>
  <div class="bggray">
     订单详情
  </div>
</template>

<script>
// import headNav from '@/components/common/head'
export default {
  name: 'tpl',
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

<style lang="less">
 .orderMenus {
  position: fixed;
  top: 1rem;
  width: 100%;
  z-index: 99;
  .yd-tab-nav-item:not(:last-child):after {
    border:none;
  }
  .yd-tab-panel {
    margin-top: 0.2rem;
  }
  .yd-tab-nav .yd-tab-active:before{
      width: 20%;
      margin-left: -10%;
  }
 }
 
</style>

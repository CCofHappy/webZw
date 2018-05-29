<template>
  <div>
      <div>个人中心</div>
      <router-link to="/order/saleOrder">
        <div>拍卖订单</div>
      </router-link>
  </div>
</template>

<script>
// import headNav from '@/components/common/head'
export default {
  name: 'user',
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
    // 如有必要再加路由监听
    $route() {
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

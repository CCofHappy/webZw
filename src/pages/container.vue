<template>
  <div class="rich-view">
    <transition :name="transitionName"  mode="out-in">
      <router-view class="rich-view"></router-view>
    </transition>
    <Tabbar :fixed="true"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'container',
  components: {
         Tabbar
    },
  data () {
    return {
     
    }
  },
  computed: {
    // 计算属性，获取vuex中的切换效果状态
    transitionName () {
      return this.$store.state.transition.transitionName
    }

  },
  methods: {
  
  },
  mounted() {
 
  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果  
    watch: {
      $route (to, from) {
        
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

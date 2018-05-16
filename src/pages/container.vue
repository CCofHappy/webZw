<template>
  <div class="rich-view">
    <router-view></router-view>
    <Tabbar :fixed="true"></Tabbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
 
  },
  methods: {
   
  },
  mounted() {
  
  },
  watch: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

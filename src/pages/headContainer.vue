<template>
	<div class="rich-view">
		<titleHead :fixed="true" :bg="bg"></titleHead> 
		<router-view class="rich-view margin-top-lg"></router-view>
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
    	//可以从路由那传入tab的颜色
     	bg:this.$route.meta.tbg ? this.$route.params.tbg : '#F7F7F7'
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
<style>
</style>
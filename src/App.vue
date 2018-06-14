<template>
	<div id="app">
		<transition :name="transitionName"  mode="out-in">
			<router-view class="child-view"></router-view>
		</transition>
		<transition name="fade"  mode="out-in">
			<loading v-show="loading"></loading>
		</transition>
	</div>
</template>

<script>
import loading from '@/components/common/loading.vue'
import { mapState, mapMutations, mapActions } from 'vuex'    //vuex状态管理器，主要使用store/index.js
export default {
	name: 'app',
	components:{
		loading
	},
	data() {
		return {
		}
	},
	computed:mapState({
		transitionName:state => state.transition.transitionName,
		loading:state => state.transition.loading,
	}),
	methods: {
		...mapMutations([
	      'CHANGE_TRANSITION',  
    	]),
	},
	mounted() {
	 
	},
 
	//监听路由的路径，可以通过不同的路径去选择不同的切换效果  
	watch: {
      $route (to, from) {
         this.CHANGE_TRANSITION(to.path)
      }
    }
}
</script>
<style lang="less">
	#app, #app input, #app button{
		font-family: inherit;
	}
	.child-view{
		/*text-align: center; */
	}
</style>
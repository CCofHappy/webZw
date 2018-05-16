<template>
	<div id="app">
		<transition :name="transitionName"  mode="out-in">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				transitionName: 'slide-left',
			}
		},
		methods: {},
		mounted() {
		 
		},
		//监听路由的路径，可以通过不同的路径去选择不同的切换效果  
		watch: {
			$route (to, from) {
				if(to.path == '/') {
					this.transitionName = 'slide-right';
				} else {
					this.transitionName = 'slide-left';
				}
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
	
	.bgrich {
		filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";  
		-moz-background-size:100% 100%;  
	    background-size:100% 100%;  
	}
	.center-menus .left {
	     /*background: url('./assets/applogo.png');*/
		.bgrich;
	}
	.center-menus .right .up {
		 /*background: url('./assets/applogo.png');*/
		.bgrich;
		height: .8rem;
	}
	.center-menus .right .down {
		 /*background: url('./assets/applogo.png');*/
		.bgrich;
		height: .8rem;
	}
</style>
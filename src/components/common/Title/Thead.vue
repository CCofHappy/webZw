<template>
  <div class="meTitle" v-if="Number(this.local.get('client'))">
      <yd-navbar :title="title || $route.meta.title" fontsize="0.36rem" :bgcolor="bg || '#F8F8F8'" :fixed="fixed" >
        <a href="javascript:void(0)" slot="left">
          <i @click="$router.go(-1)" class="iconfont icon-Slicex9 margin-right-xs"></i>
        </a>
    </yd-navbar>
    <div style="height: 1rem;"></div>
  </div>
</template>

<script>
export default {
  name: 'Thead',
  props:['bg','fixed','title'],
  components: {
    },
  data () {
    return {
      
    }
  },
  computed: {
      
  },
  methods: {
  	// goBack () {
   //    window.history.length > 1
   //      ? this.$router.go(-1)
   //      : this.$router.push('/')
   //  }
  },
  mounted() {
     
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scope>
.meTitle {
  height: 1rem;
}
 .yd-navbar:after {
  border:none;
 }
</style>

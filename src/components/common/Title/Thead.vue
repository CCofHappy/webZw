<template>
  <div class="meTitle" v-if="Number(this.$localStorage.get('client'))">
      <yd-navbar :title="title || $route.meta.title" fontsize="0.36rem" :bgcolor="bg || '#F8F8F8'" :fixed="fixed" >
        <a href="javascript:void(0)" slot="left">
          <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
        </a>
    </yd-navbar>
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

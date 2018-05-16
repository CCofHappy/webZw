<template>
  <div class="container">
    <headNav v-if="client"></headNav>
     <yd-infinitescroll :callback="refresh" ref="infinitescrollDemo">
        <yd-list theme="1" slot="list">
            <yd-list-item v-for="item, key in data" :key="key">
                <img slot="img" :src="item.img">
                <span slot="title">{{item.title}}</span>
                <yd-list-other slot="other">
                    <div>{{item.ct}}</div>
                </yd-list-other>
            </yd-list-item>
        </yd-list>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import headNav from '@/components/common/head'
export default {
  name: 'demo',
  components: {
        headNav
    },
  data () {
    return {
      client: true,
      page: 1,
      data:[]
    }
  },
  computed: {
      
  },
  methods: {
    async refresh () {
      let replytime = Date.now();
      let _data = await this.api.getPetals(replytime, this.page,10);
      let lastPage = JSON.parse(_data).showapi_res_body.allPages
       _data = JSON.parse(_data).showapi_res_body.contentlist
       console.table(_data)
      if(this.page == 1){
        this.data = _data
      }else {
        this.data =  [...this.data, ..._data];
      }
      if (_data.length < 10 || this.page == lastPage) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
      }
      /* 单次请求数据完毕 */
      this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      this.page ++
    },
  },
  mounted() {
     this.refresh();
     // 设备入口判断
     if(this.$route.query.type == 'ios'){
        this.client = false;
     }
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

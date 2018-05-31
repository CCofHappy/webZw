<template>
  <!--下拉单选框-->
  <select   v-model="value"  @change="chooseMedicine(value)">
    <option v-for="(item, index) in dataList" :value="item.key">{{item.value}}</option>
  </select>
</template>
<style lang="less">
 
</style>
<script>
  export default{
    data(){
      return{
        value:'',
      }
    },
    props: {
      dataList:Array,
      selectedValue: Object,//传回父组件的选择值
    },
    methods: {
      chooseMedicine(value){
         this.selectedValue.key=value
      },
 
    },
    mounted(){
    }
  }
</script>
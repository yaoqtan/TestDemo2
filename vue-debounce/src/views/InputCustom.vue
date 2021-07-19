<template>
  <div class="router1">

   <el-input class="el-input" v-model="text"/>
    <div>{{text}}</div>
    <el-input class="el-input" v-model="text1"/>
     <div>{{text1}}</div>
    <button @click="onBtn">
      点击
    </button>
  </div>
</template>


<script>
export default {
  data () {
    return({
      text:12,
      text1:23
    })
  },
  computed: {

  },
  methods: {
    onBtn(){
      console.log(this.text,this.text1)
    },


  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.el-input{
  margin:0 auto;
  width: 160px;
}
</style>

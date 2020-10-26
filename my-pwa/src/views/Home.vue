<template>
  <div class="home">
    {{id}}
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
      return{
          id:1
      }
  },

  created(){
      fetch('https://api.github.com/repos/facebook/react').then(function(res){//https://api.github.com/repos/facebook/react
          // 请求成功，得到 response 对象，调用 response 对象的 json 方法并返回
          // console.log(res)
          return res.json();
      }).then((data)=>{
          console.log(data)
          this.id=data.id;
      })
      console.log(this.id)
  }

}
</script>

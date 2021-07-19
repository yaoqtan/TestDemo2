<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive,toRefs} from 'vue'
import qs from 'qs'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    const data = reactive({
      name:'yao',
      age:18,
      subList:[
        {
          name:1
        },
        {
          name:2
        }
      ]
    })
    console.log(data)
    console.log(qs.stringify(data))

    axios.post('/qwe',{
      data:qs.stringify(data)
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

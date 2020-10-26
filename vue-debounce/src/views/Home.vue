<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <scroll>
      <div>sajflsdj</div>
    </scroll>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import scroll from 'vue-seamless-scroll'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    scroll
  }
}
</script>

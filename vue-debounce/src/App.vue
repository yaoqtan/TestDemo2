<template>
  <div id="app">
    <div id="nav" >
      <router-link to="/">Home</router-link> |

      <router-link to="/about">About</router-link>

      <router-link to="/keepalive">KeepaLive</router-link>
      <router-link to="/routerOne">routerOne</router-link>

      <router-link to="/attrListeners">AttrListeners</router-link> |
      <router-link to="/textComputed">TextComputed</router-link> |
      <router-link to="/inputCustom">inputCustom</router-link> |
      <router-link to="/el_dialog">Eldialog</router-link> |
      <router-link to="/mouse_movement">MouseMovement</router-link> |
      <router-link to="/axios_demo">axios</router-link>

    </div>
    <!-- <div class="test"  :style="{top:pageY,left:pageX}">
      test
    </div> -->
    <!-- <div >
      <router-link to="/">Home</router-link> |
      
      <router-link to="/about">About</router-link>

      <router-link to="/keepalive">KeepaLive</router-link>
    </div> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>




    <!-- <keep-alive include="a,b">
      <component :is="view">

      </component>
    </keep-alive> -->
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      // pageY:0,
      // pageX:0
    }
  },
  methods:{
    // test(e){
    //   console.log(e)
    //   this.pageY=e.y+'px'
    //   this.pageX=e.x+'px'
    // }
  }
}
</script>




<style>
/* .test{
  position: fixed;
  background: red;
  width: 100px;
  height: 100px;
  top:0;
  bottom:0

} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:0 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app{padding-bottom:100px
}
.fade-enter{opacity:0;transform:translateX(100%)
}
.fade-enter-active{transition:all 0.2s
}
.fade-leave{opacity:1;transform:translateX(0)
}
.fade-leave-active{opacity:0;transform:translateX(-100%);transition:all 0.2s
}
.flex-fill{-ms-flex:1 1;flex:1 1
}
.options{width:300px;font-size:15px;margin-right:60px
}
.options p{color:#000;margin-bottom:30px
}
.options p b{font-size:16px;font-style:italic
}
.clearfix{zoom:1
}
.clearfix:after{display:block;height:0;clear:both;content:".";visibility:hidden
}
.wd800{width:800px;margin:30px auto
}
.warp{height:260px;width:360px;overflow:hidden
}
.warp ul{list-style:none;padding:0;margin:0 auto
}
.warp ul li,.warp ul a{display:block;height:30px;line-height:30px;display:flex;justify-content:space-between;font-size:15px
}
@media screen and (max-width: 770px){
.warp{width:90%;margin:0 auto
}
body{background-color:lightblue
}
.wd800{width:100%
}
.flex.wd800{display:block
}
.options{width:90%;margin:20px auto
}
.options p{margin-bottom:0
}
}
</style>

<template>

  <div class="about">
    <About>
      Hello
      <div slot="footer" slot-scope='aaa'>
        footer
        {{aaa}}
        </div>
      <div slot="header">header</div>
    </About>
    <h1>This is an about page</h1>
    <div>
    <div class="test" 
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    >

    </div>
    <div
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
     class="test">

    </div>
    <div
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
     class="test">
    </div>
    
     </div>

    <div :class="{show:test}" class="hidden">sfds</div>
  
    <input ref="file" type="file" @input="change"/>
  </div>


</template>
<script>
import About from '@/components/About'
    function debounce(fn, delay) {
      // 定时器
      let timer = null
      return function () {
          let context = this
          let args = arguments

          if(timer) {
              clearTimeout(timer)
          }
          timer = setTimeout(function () {
              fn.apply(context, args)
          }, delay)
      }
    }
export default {
  components:{
    About
  },
  data(){
    return {
      test:false,
      
    }
  },
  created(){
    fetch('http://mock-api.com/VLn4JZzx.mock/getList',{

    }).then((res)=>res.json()).then(res=>console.log(res))
  },
  methods:{
    mouseenter:debounce(function (){
        console.log(this)
        this.test=true
    },500),
    mouseleave:debounce(function(){
        console.log(this)
        this.test=false
    },500),
    change(file){
      console.log(file)
      let reader = new FileReader()
      reader.readAsDataURL(this.$refs.file.files[0])
      reader.onload = async () => {
        let base64Str = reader.result
        console.log(base64Str)
      }
      console.log(this.$refs.file.files[0])
    }

  }


}
</script>
<style >
div.test{
  display: inline-block;
  width: 20px;
  height: 40px;
  margin:40px;
  background: red;
}
.hidden{
  position: relative;
  display: none;
  opacity: 0;
}
.show{
  z-index: 1;
  display: block;
  -webkit-animation: fadeIn .5s .5s;
  animation: fadeIn .1s .1s ;
  animation-fill-mode:forwards
}
/* Fading entrances  */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}



</style>
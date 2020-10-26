<template>
    <div class="home">

        DemoScroll
        <div class="vuescroll">
        <vuescroll
                class=""
                :ops="{
                    bar: {
                      //size: '10px',
                      opacity: 0.5,
                      //onlyShowBarOnScroll: false
                    },
                    vuescroll: {
                      wheelScrollDuration: 0,
                      wheelDirectionReverse: false
                    }
                }"
        >
            <div class="test">
                <p style="width:1200px;" v-for="a in arr" :key="a">{{a}}</p>
            </div>
        </vuescroll>
        </div>
    </div>
</template>

<script>
  import vuescroll from 'vuescroll'
  export default {
    name: 'DemoScroll',
    components: {
      vuescroll
    },
    data(){
      return{

      }
    },
    computed:{
      arr(){
        return [...Array(50)].map((item,index)=>index)
      }
    }
  }
</script>
<style scoped>
    .test{
        height: 500px;
    }
    .vuescroll{
        width: 200px;
        height: 200px;
        background: red;
    }
</style>

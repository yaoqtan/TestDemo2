<template>
  <div class="about">
    <h1>setup toRefs</h1>
    <Cdemo1 :msg="msg"/>
    <div>
      <button v-for="(i,index) in array" :key="index" @click="selectArray(index)">
        {{index}}:{{i}}
      </button>
    </div>
    {{item}}
    <div>
      name:{{reactiveArray.name}} age:{{reactiveArray.age}}
    </div>
  </div>
</template>
<script>
import {reactive,toRefs,onBeforeMount,onMounted } from "vue";
import Cdemo1 from '@/components/Cdemo1.vue'

// interface DataProps {
//   girls: string[];
//   selectGirl: string;
//   selectGirlFun: (index: number) => void;
// }
export  default {
  name:'demo1',
  components:{
    Cdemo1
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  setup(){
    console.log('setup')
    const data = reactive({
      msg:'qwe',
      array:['A','B','C','D'],
      item:'',
      selectArray:(index)=>{
        data.item=data.array[index]
      },
      reactiveArray:{
        name:'yao',
        age:18
      }
    })
    const refData= toRefs(data)

    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted!')
    })

    return{
      ...refData
    }
  },
  beforeMount(){
      console.log('beforeMount')
  },
  mounted(){
    console.log('mouonted')
  }
}
</script>

<template>
  <div class="about">
    <h1>setup reactive</h1>
    <Cdemo1 :msg="data.msg"/>
    <div>
      <button v-for="(i,index) in data.array" :key="index" @click="data.selectArray(index)">
        {{index}}:{{i}}
      </button>
    </div>
    {{item}}
    <div>
      name:{{data.reactiveArray.name}} age:{{data.reactiveArray.age}}
    </div>
  </div>
</template>
<script>
import {reactive } from "vue";
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
  setup(){
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

    return{
     data
    }
  }
}
</script>

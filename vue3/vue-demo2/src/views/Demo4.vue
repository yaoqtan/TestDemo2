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

    <div>
      <button @click="overAction">
        overTitle
      </button>
      {{overText}}
    </div>
  </div>
</template>
<script>
import {ref,reactive,toRefs,watch } from "vue";
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

    const overText=ref('title')
    const overAction = ()=>{
      overText.value=overText.value+'!!!'
      document.title=overText.value
    }

    /*
    * watch绑定一个变量变化
    */
    // watch(overText,(newValue,oldValue)=>{
    //   console.log(newValue)
    //   console.log(oldValue)
    //   //document.title=newValue
    // })
    /*
     *watch 绑定多个变量变化方法一
     */
    // watch([overText,()=>data.item],(newValue,oldValue)=>{
    //   console.log(newValue)
    //   console.log(oldValue)
    // })

    /*
    *watch 绑定多个变量变化 方法二
    */
    watch([overText,()=>data.item],([newOverText,newItem],[oldOverText,oldItem])=>{
      console.log(newOverText)
      console.log(oldOverText)

      console.log(newItem)
      console.log(oldItem)
    })

    return{
      ...refData,
      overText,
      overAction
    }
  }
}
</script>

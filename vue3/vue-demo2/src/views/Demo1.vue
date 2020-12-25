<template>
  <div class="about">
    <h1>setup ref</h1>
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
import { ref,reactive } from "vue";
import Cdemo1 from '@/components/Cdemo1.vue'
export  default {
  name:'demo1',
  components:{
    Cdemo1
  },
  setup(props,context){
    console.log(props)
    console.log(context)

    console.log(context.attrs,context.slots,context.parent,context.root,context.emit,context.refs)
    const msg = ref('qwe')
    const array = ref(['A','B','C','D'])
    const item=ref('')
    const selectArray = (index)=>{
      item.value=array.value[index];
    }
    const reactiveArray = reactive({
      name:'yao',
      age:18
    })

    return{
      msg,
      array,
      item,
      selectArray,
      reactiveArray
    }
  }
}
</script>

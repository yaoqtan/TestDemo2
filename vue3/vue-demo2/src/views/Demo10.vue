<template>
  <div class="demo09">

    <Suspense>
      <template #default>
       <async-show />
      </template>
      <template #fallback>
        <h1>
          Loading...
        </h1>
      </template>
    </Suspense>



  </div>
</template>
<script>
import {onErrorCaptured} from 'vue'
import AsyncShow from "./../components/AsyncShow";
export  default {
  name:'demo9',
  components:{
    AsyncShow
  },
  setup(){
    onErrorCaptured((err)=>{
      console.log(1)
      console.log(err)
    })

    return{}
  }
}
</script>

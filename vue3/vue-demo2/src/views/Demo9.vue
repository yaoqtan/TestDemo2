<template>
  <div class="demo09">

   <Suspense>
     <template #default>
      <set-timeout-show/>
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
import SetTimeoutShow from "./../components/SetTimeoutShow";
export  default {
  name:'demo9',
  components:{
    SetTimeoutShow
  },
  setup(){


    return{

    }
  }
}
</script>

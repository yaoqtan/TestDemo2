<template>
  <div class="about">

    <div style="word-break: break-word">--------------------------------------------------------</div>
    <div v-if="loading">Loading...</div>
    <div v-if="loaded">
      <img style="width:100px" :src="result.message">
    </div>




  </div>
</template>
<script>
import useUrlAxios from './../hooks/useUrlAxios'
export  default {
  name:'demo7',
  setup(){
    const {result,loading,loaded} =useUrlAxios(
        'https://dog.ceo/api/breeds/image/random'
    )

    return{
      result,
      loading,
      loaded
    }
  }
}
</script>

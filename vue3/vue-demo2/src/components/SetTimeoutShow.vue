<template>

  <h1>{{result}}</h1>

</template>

<script>
export default {
  name: 'SetTimeoutShow',
  setup(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        return resolve({result:"JSPang"});
      },1000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

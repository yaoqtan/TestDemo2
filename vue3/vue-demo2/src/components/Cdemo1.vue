<template>
  <div>
    demo1 components
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Cdemo1',
  props: {
    msg: String
  },
  setup(prop,context){
    console.log(prop)
    console.log(context)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

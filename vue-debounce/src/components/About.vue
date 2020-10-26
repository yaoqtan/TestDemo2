<template>
  <div class="hello">
    <slot name="header"></slot>
    <h1>匿名插槽,具名插槽,作用域插槽</h1>
    <slot :name="{name:'234'}" />

    <slot age='23' :say="{name:'hello'}" name="footer"></slot>


    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

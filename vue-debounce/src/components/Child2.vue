<template>
  <div class="hello">
    <div>child2</div>
    <div>{{$attrs.item.name}}</div>
    <button @click="$listeners.onClick('child2 点击测试')">
        点击
    </button>

  </div>
</template>

<script>
export default {
  name: 'Child2',
  created(){
    console.log('child2')
    console.log(this.$attrs)
    console.log(this.$listeners)
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

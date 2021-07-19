<template>
  <div class="hello">
    <div>child1</div>
    <div>{{$attrs.item.name}}</div>
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from './Child2'
export default {
  name: 'Child1',
  inheritAttrs:false,
  props:{
    id:{
      type:Object
    }
  },
  components:{
    Child2
  },
  created(){

    console.log('child1')
    console.log(this.$attrs)
    console.log(this.id)
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

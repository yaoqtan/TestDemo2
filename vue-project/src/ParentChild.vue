<template>
  <div class="parent">

    <div>Parent to Child:</div>
    <child :messages="name" @listenToChildEvent="showMsgFormChild"></child>
    <input v-model="name"/>

    <button @click="func">方法</button>


  </div>
</template>

<script>
import child from './components/Child.vue'
export default {
  name: 'ParentChild',
  components:{
    child
  },
  data () {
    return {
      name:'yao'
    }
  },
  methods:{
    showMsgFormChild(data) {
      console.log(data)
    },
    func(){
      console.log('func')
    }
  }
}
</script>


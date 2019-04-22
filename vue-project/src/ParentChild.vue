<template>
  <div class="parent">

    <div>Parent to Child:</div>
    <child :messages="name" @listenToChildEvent="showMsgFormChild"></child>
    <input v-model="name"/>

    <button @click="func">方法</button>

    <template>
      <div>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
      </div>
    </template>

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


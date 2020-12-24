<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{testData}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{testData}}
    <scroll>
      <div>sajflsdj</div>

      <a-button key="back">取消</a-button>

      <!-- @click="handleCancel"-->

      <a-date-picker v-model="term_end"/>
      <a-range-picker/>

    </scroll>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import scroll from 'vue-seamless-scroll'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    scroll
  },
  data(){
    return{
      term_end:null
    }
  },
  beforeCreate(){
    console.log('beforeCreate1')
  },
  created(){
    axios.get(`/graphql?query=${this.getQuery()}`).then(res => {
      console.log("返回值: 2", res.data);
    }).catch(err=>console.log(err));
    axios.get(`/json`).then(res => {
      console.log("json", res);
    }).catch(err=>console.log(err));
    console.log('created1')
  },
  computed:{
    testData(){
      console.log('computed1')
      return 'testData2'
    }
  },
  beforeMount(){
    console.log('beforeMount1')
  },
  mounted(){
    console.log('mounted1')
  },
  methods:{
    getQuery() {
      const res = `
        {
          navList {
            title
            url
            id {
              name
              age
            }
          }
        }`;
      return encodeURI(res);
    },
  }
}
</script>

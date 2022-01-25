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
    <!-- <el-dialog
        title="提示"
        :visible="dialogVisible"
        width="30%"
        v-dialogDrag
        >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import scroll from 'vue-seamless-scroll'
// import axios from 'axios'
// import pinyin from 'pinyin'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    scroll
  },
  data(){
    return{
      term_end:null,
      dialogVisible:true
    }
  },
  beforeCreate(){
    console.log('beforeCreate1')
  },
  created(){
    // axios.get(`/graphql?query=${this.getQuery()}`).then(res => {
    //   console.log("返回值: 2", res.data);
    // }).catch(err=>console.log(err));
    // axios.get(`/json`).then(res => {
    //   console.log("json", res);
    // }).catch(err=>console.log(err));
    // console.log('created1')
    // console.log(pinyin('we',{
    //   style:pinyin.STYLE_NORMAL,
    // }))
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

<template>
  <div class="parent">
    <div>name:{{messages}}</div>

    <div>Child</div>
    <div>{{isShow}}</div>
    <div>{{num}}</div>

    <button @click="sendMsgToParent">向父传值</button>
    <input v-model="form.age"/>

  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex';
  export default {
    props:{
      messages:{
        type: String,
        default() {
          return '3';
        }
      }
    },
    data () {
      return {
        form:{
          age:14
        }


      }
    },
    computed:{
      ...mapState({
        isShow:state=>state.footerStatus.showFooter,
        num:state=>state.footerStatus.changableNum
      })
    },
    methods:{
      sendMsgToParent () {

        this.$emit('listenToChildEvent',this.form)
      }
    }
  }
</script>


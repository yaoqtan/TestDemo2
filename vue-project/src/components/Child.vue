<template>
  <div class="parent">
    <div>name:{{messages}}</div>

    <div>Child</div>


    <button @click="sendMsgToParent">向父传值</button>
    <input v-model="form.age"/>

  </div>
</template>

<script>

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
    methods:{
      sendMsgToParent () {

        this.$emit('listenToChildEvent',this.form)
      }
    }
  }
</script>


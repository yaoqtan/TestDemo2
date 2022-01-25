<template>
  <div class="test" :style="{ top: pageY, left: pageX }">test</div>
</template>

<script>
export default {
  data() {
    return {
      pageY: 0,
      pageX: 0,
    }
  },
  created() {},
  mounted() {
    document.getElementById('app').addEventListener('click', this.test, false)
  },
   beforeRouteEnter(to, from, next) {
     console.log('vm')
    next((vm) => {
     document.getElementById('app').addEventListener('click', vm.test, false)
    })
  },
  methods: {
    test(e) {
      console.log(e)
      this.pageY = e.y + 'px'
      this.pageX = e.x + 'px'
    },
  },
  destroyed() {
    console.log('destroyed')
  },
  deactivated() {
    document.getElementById('app').removeEventListener('click', this.test)
    console.log('deactivated')
  },
}
</script>




<style>
.test {
  position: fixed;
  background: red;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
}
</style>

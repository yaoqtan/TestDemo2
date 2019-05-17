<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>Vuex :<a href="https://segmentfault.com/a/1190000015782272" target="_blank">https://segmentfault.com/a/1190000015782272</a></div>

    <div>{{details()}}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    details: function() {
      return process.env.NODE_ENV
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

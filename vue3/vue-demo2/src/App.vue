<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/demo1">Demo1</router-link> |
    <router-link to="/demo2">Demo2</router-link> |
    <router-link to="/demo3">Demo3</router-link> |
    <router-link to="/demo4">Demo4</router-link> |
    <router-link to="/demo5">Demo5</router-link> |
    <router-link to="/demo6">Demo6</router-link> |
    <router-link to="/demo7">Demo7</router-link> |
    <router-link to="/demo8">Demo8</router-link> |
    <router-link to="/demo9">Demo9</router-link> |
    <router-link to="/demo10">Demo10</router-link>
  </div>
  <router-view/>
  <div id="modalView"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

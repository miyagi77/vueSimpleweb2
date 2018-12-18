<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-head></v-head>
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Head from './components/head.vue'

export default {
  name: 'app',
  components: {
   // HelloWorld
   "v-head": Head,
  }
}
</script>

<style>
body{
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.active{
  background-color: #E7E7E7
}
</style>

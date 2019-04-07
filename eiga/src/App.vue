<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MapApp/>
  </div>
</template>

<script>
import MapApp from './components/MapApp.vue'

export default {
  name: 'app',
  components: {
    MapApp
  }
}
</script>

<style>
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <MapApp docId="EuPzhKFzieeYna9UAWmc"/>
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
body, html {
	margin: 0;
	padding: 0;
}

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

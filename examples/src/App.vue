<template>
  <div id="app">
	<ExamplesNavbar></ExamplesNavbar>
    <router-view class="routerView"></router-view>
  </div>
</template>

<script>
	import ExamplesNavbar from './components/ExamplesNavbar.vue'
	export default {
		name:'app',
		components:{
			ExamplesNavbar
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
}
.routerView {
	margin-top: 60px;
}
</style>

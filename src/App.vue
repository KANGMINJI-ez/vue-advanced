<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';

export default {
  components: {
    ToolBar
  },
}
</script>

<style>
body {padding: 0; margin: 0;}
#app {margin: 0 auto; width: 85%;}
a {text-decoration: none; color: #000;}
a:hover {color: #ddd;text-decoration: underline;}
/* a.router-link-exact-active {} */
ul, li {list-style: none;}
</style>

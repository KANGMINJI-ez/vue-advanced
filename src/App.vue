<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner :loading="LoadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  components: {
    ToolBar,
    Spinner,
  }, 
  data() {
    return {
      LoadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.LoadingStatus = true;
    },
    endSpinner() {
      this.LoadingStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
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

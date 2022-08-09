//main.js는 application의 구조도가 한 눈에 보여야 함

import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import {store} from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

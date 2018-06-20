// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import axios from 'axios';

import apiConfig from '../config/api.config'

import 'iview/dist/styles/iview.css';
import './assets/myTheme/index.less';
import './assets/css/app.css'
Vue.use(iView);

// axios.defaults.baseURL = apiConfig.baseUrl
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

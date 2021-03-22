// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'

import router from './router/index'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import "jquery-ui-dist/jquery-ui"
import "jquery-ui-dist/jquery-ui.min.css"
import "font-awesome/css/font-awesome.min.css"
import "animate.css/animate.min.css"

// Vue.prototype.$qs = qs
Vue.use(VueAxios,axios)
Vue.config.productionTip = true

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router: router,

})

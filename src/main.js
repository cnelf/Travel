import Vue from 'vue'
import fastClick from 'fastclick'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Elementui from 'element-ui'
import routes from './router/router.js'
import store from './vuex/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Elementui)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

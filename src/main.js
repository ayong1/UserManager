// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Router from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:Router
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

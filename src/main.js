// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import http from '@/assets/js/api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = http
Vue.use(ElementUI)

Vue.config.productionTip = false

/**
 * 全局钩子
 */
router.beforeEach((to, from, next) => {
  if (sessionStorage._token) {
    if (to.name === 'Login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (to.name !== 'Login') {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

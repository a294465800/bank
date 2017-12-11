import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import ExaminationList from '@/pages/examination/examinationList'
import Examination from '@/pages/examination/examination'
import Rank from '@/pages/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/examination/list',
      name: 'ExaminationList',
      component: ExaminationList
    },
    {
      path: '/examination',
      name: 'Examination',
      component: Examination,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next('examination/list')
        }
        next()
      }
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
  ]
})

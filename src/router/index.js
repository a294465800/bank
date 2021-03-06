import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import Mistake from '@/pages/mistake/mistakes'
import TrainsList from '@/pages/trains/trainsList'
import Trains from '@/pages/trains/trains'
import ExaminationList from '@/pages/examination/examinationList'
import Examination from '@/pages/examination/examination'
import Rank from '@/pages/rank/rank'
import Reword from '@/pages/reword/reword'
import Personal from '@/pages/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/mistake',
      name: 'Mistake',
      component: Mistake
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/trains/list',
      name: 'TrainsList',
      component: TrainsList,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next('/')
        }
        next()
      }
    },
    {
      path: '/trains',
      name: 'Trains',
      component: Trains,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next('trains/list')
        }
        next()
      }
    },
    {
      path: '/examination/list',
      name: 'ExaminationList',
      component: ExaminationList,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next('/')
        }
        next()
      }
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
    {
      path: '/reword',
      name: 'Reword',
      component: Reword,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next('trains/list')
        }
        next()
      }
    },
    {
      path: '/info',
      name: 'Personal',
      component: Personal
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user',
      component: user
    }
  ]
})

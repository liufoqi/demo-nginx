import Vue from 'vue'
import Router from 'vue-router'
import First from '@/views/index'
import Second from '@/views/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})

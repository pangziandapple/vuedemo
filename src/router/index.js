import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import userList from '@/components/user/userList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/userList',
      name: 'userList',
      component: userList
    }
  ]
})

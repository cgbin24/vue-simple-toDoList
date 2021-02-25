import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: () => import(/* webpackChunkName: "todolist" */ '../views/ToDoList/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/IndexView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  },
  {
    path: '/resseting',
    name: 'Resseting',
    component: () => import(/* webpackChunkName: "resseting" */ '@/views/RessetingView.vue')
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '@/views/GoalsView.vue')
  },
  {
    path: '/goal/:id',
    name: 'Goal',
    component: () => import(/* webpackChunkName: "goal" */ '@/views/GoalView.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

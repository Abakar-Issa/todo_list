import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'


export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

export const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH)
})

export default router

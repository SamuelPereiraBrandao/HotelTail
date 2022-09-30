import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Reserva from '@/views/Reserva.vue'
import Informacoes from '@/views/Informacoes.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reserva',
    name: 'reserva',
    component: Reserva
  },
  {
    path:'/informacoes',
    name:'informacoes',
    component: Informacoes
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Naslovnica',
    component: Home
  },
  {
    path: '/ponuda_vozila',
    name: 'Ponuda vozila',
    component: () => import('../views/Ponuda.vue')
  },
  {
    path: '/o_nama',
    name: 'O nama',
    component: () => import('../views/Onama.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

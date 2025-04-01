import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        { path: '/', name: 'index', component: () => import('@/views/Index.vue') },
        { path: '/productos', name: 'productos', component: () => import('@/views/Productos.vue') },
        { path: '/personas', name: 'personas', component: () => import('@/views/Personas.vue') },
        { path: '/categorias', name: 'categorias', component: () => import('@/views/Categorias.vue') },
        { path: '/terminos-de-pago', name: 'terminosdepago', component: () => import('@/views/Terminos.vue') },
        { path: '/compania', name: 'compania', component: () => import('@/views/Companias.vue') },

      ]
    }
  ],
})

export default router

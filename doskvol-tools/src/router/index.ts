import { createRouter, createWebHistory } from 'vue-router'
import GeneratorView from '../views/GeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'generatorView' }
    },
    {
      path: '/generator',
      name: 'generatorView',
      component: GeneratorView
    },
  ]
})

export default router

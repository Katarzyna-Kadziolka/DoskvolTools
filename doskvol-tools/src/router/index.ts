import { createRouter, createWebHistory } from 'vue-router'
import GeneratorView from '../views/GeneratorView.vue'
import BuildingGenerator from '@/components/generator/buildingGenerator/BuildingGenerator.vue'
import StreetGenerator from '@/components/generator/streetGenerator/StreetGenerator.vue'
import CharacterGenerator from '@/components/generator/characterGenerator/CharacterGenerator.vue'
import FiendGenerator from '@/components/generator/fiendGenerator/FiendGenerator.vue'
import CultGenerator from '@/components/generator/cultGenerator/CultGenerator.vue'
import HeistGenerator from '@/components/generator/heistGenerator/HeistGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'streetGenerator' }
    },
    {
      path: '/generator',
      name: 'generatorView',
      component: GeneratorView,
      children: [
        {
          path: '',
          redirect: { name: 'streetGenerator' }
        },
        {
          path: 'street',
          name: 'streetGenerator',
          component: StreetGenerator
        },
        {
          path: 'building',
          name: 'buildingGenerator',
          component: BuildingGenerator
        },
        {
          path: 'character',
          name: 'characterGenerator',
          component: CharacterGenerator
        },
        {
          path: 'fiend',
          name: 'fiendGenerator',
          component: FiendGenerator
        },
        {
          path: 'cult',
          name: 'cultGenerator',
          component: CultGenerator
        },
        {
          path: 'heist',
          name: 'heistGenerator',
          component: HeistGenerator
        },
      ]
    },
  ]
})

export default router

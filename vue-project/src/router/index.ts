import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/testessential',
      name: 'testessential',
      component: () => import('../views/TestEssentialView.vue'),
    },
    {
      path: '/testreusability',
      name: 'testreusability',
      component: () => import('../views/TestReusability.vue'),
    },
    {
      path: '/testbuiltin',
      name: 'testbuiltin',
      component: () => import('../views/TestBuiltIn.vue')
    },
    {
      path: '/extratopics',
      name: 'extratopics',
      component: () => import('../views/ExtraTopicsView.vue'),
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: () => import('../views/UtilView.vue'),
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/FormKit.vue'),
    },

    {
      path: '/api',
      name: 'api',
      component: () => import('../views/ApiView.vue'),
    },
  ],
})

export default router

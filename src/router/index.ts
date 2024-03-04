import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },

    

    {
      path: '/projects',
      name: 'project1',
      component: HomeView
    },
    {
      path: '/project2',
      name: 'project2',
      component: HomeView
    },
    {
      path: '/project3',
      name: 'project3',
      component: HomeView
    },
  ]
})

export default router

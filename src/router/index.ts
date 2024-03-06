import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProgrammingTricksView from '@/views/ProgrammingTricksView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

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
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/tips-and-tricks',
      name: 'tips-and-tricks',
      component: ProgrammingTricksView
    },

    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects/dactyl-manuform',
      name: 'dactyl-manuform',
      component: () => import('../views/ProjectDactylManuformView.vue')
    },
    {
      path: '/projects/mcserver',
      name: 'mcserver',
      component: () => import('../views/ProjectMinecraftServerView.vue')
    },
    {
      path: '/projects/wireless-grid',
      name: 'wireless-grid',
      component: () => import('../views/ProjectWirelessLEDView.vue')
    },
    {
      path: '/projects/srt-program',
      name: 'srt-program',
      component: () => import('../views/ProjectSRTProgramView.vue')
    },

    //Redirect to home when not found
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
})

export default router

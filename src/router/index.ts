import { nextTick } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { docMenus } from './docs'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Site',
    component: () => import('@/layout/site.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/layout/docs.vue'),
    children: docMenus
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      nextTick(() => {
        const el = document.getElementById(to.hash)
        if (el) el.scrollIntoView()
      })
    }
  }
})

export default router

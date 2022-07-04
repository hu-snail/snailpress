import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Site from '@/layout/site.vue'
import DocsLayout from '@/layout/docs.vue'

import { docMenus } from './docs'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Site
    }, {
        path: '/docs',
        component: DocsLayout,
        children: docMenus
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      nextTick(() => {
        const el = document.querySelector(to.hash)
        if (el) el.scrollIntoView()
      })
    }
  }
})

export default router

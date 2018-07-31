import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      keepAlive: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/about/news',
    name: 'news',
    component: () => import('@/views/News.vue')
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new Router({
  routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '易店无忧'
  next()
})

export default router

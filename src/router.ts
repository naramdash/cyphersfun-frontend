import * as VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Index from './pages/Index.vue'
import Scout from './pages/Scout.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/scout', component: Scout },
<<<<<<< HEAD
  {
    path: '/about',
    component: HelloWorld,
    props: { msg: 'welcome to vite' },
  },
=======
  { path: '/about', component: HelloWorld, props: { msg: 'welcome to vite' } },
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router

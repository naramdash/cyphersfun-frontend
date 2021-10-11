import * as VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Index from './pages/Index.vue'
import Scout from './pages/Scout.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/scout', component: Scout },
  { path: '/about', component: HelloWorld, props: {msg: "welcome to vite"} }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
  })


export default router
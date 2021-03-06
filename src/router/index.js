import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import page from '@/views/page/page.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page',
    name: 'page',
    component: page,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

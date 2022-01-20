import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Brazil from '../views/Brazil'

import Cart from '../views/Cart'
import ProductDetails from '../views/ProductDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homebtn',
    name: 'homebtn',
    component: Brazil
  },
  {
    path: '/carticon',
    name: 'carticon',
    component: Cart
  },
  {
    path: '/details/:id',
    name: 'ProductDetails',
    component: ProductDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

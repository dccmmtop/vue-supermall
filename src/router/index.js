import Vue from 'vue'
import VueRouter from 'vue-router'
const  Cart = () => import("views/shopcart/Shopcart")
const  Home = () => import("views/home/Home")
const  Category = () => import("views/category/Category")
const  Profile = () => import("views/profile/Profile")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

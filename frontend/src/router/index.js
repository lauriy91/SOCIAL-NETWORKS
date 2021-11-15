import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import Pruebas from '../views/Pruebas.vue'
import NewUser from '../views/NewUser.vue'

Vue.use(VueRouter)

// Traemos todas las rutas que tendrá el enlace
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/newUser',
    name: 'NewUser',
    component: NewUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

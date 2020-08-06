import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Direct from '../views/direct/index.vue'
import Explore from '../views/explore/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/direct',
    name: 'Direct',
    component: Direct
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile'),
    children: [
      {
        path: '',
        name: 'ProfilePosts',
        component: () =>
          import(/* webpackChunkName: "posts" */ '../views/profile/post')
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(/* webpackChunkName: "igtv" */ '../views/profile/igtv')
      },
      {
        path: 'saved',
        name: 'ProfileSaved',
        component: () =>
          import(/* webpackChunkName: "saved" */ '../views/profile/saved')
      },
      {
        path: 'tags',
        name: 'ProfileTag',
        component: () =>
          import(/* webpackChunkName: "tag" */ '../views/profile/tag')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

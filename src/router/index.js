import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
    path: '/sign-up-user-data',
    name: 'SignUpUserInfo',
    component: () => import('../views/SignUpUserInfo')
  },
  {
    path: '/sign-up-password',
    name: 'SignUpPassword',
    component: () => import('../views/SignUpPassword')
  },
];

const router = new VueRouter({
  routes
});

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from "../components/NotFound";

const guard = function(to, from, next) {
  if (window.localStorage.getItem('token')) {
    next();
  } else {
    window.location.href = "/login";
  }
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
    beforeEnter: (to,from,next) => {
      guard(to, from, next);
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/post',
    name: 'post',
    component: () => import( '../components/PostList.vue'),
    beforeEnter: (to,from,next) => {
      guard(to, from, next);
    }
  },
  {
    path: "*",
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

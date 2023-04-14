import Home from '../views/Home.vue';
import Signup from '../components/Signup.vue';
import Post from '../components/Post';
import store from '../store';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Signing',
    component: Signup
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Before each')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) { // استفاده از isLoggedIn به جای isLogin
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/PageHome.vue'),
    meta: {
      title: 'Homepage',
      layout: 'default',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      layout: 'default',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;

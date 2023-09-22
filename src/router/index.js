import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('../views/PageHome.vue'),
    children: [
      {
        path: '/',
        name: 'homePage',
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../layouts/LayoutDefault.vue'),
    children: [
      {
        path: '',
        name: 'homePage',
        component: () => import('../views/PageHome.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'notFoundPage',
        component: () => import('../views/PageNotFound.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;

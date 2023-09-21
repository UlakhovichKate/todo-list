import {createRouter, createWebHistory, RouterView} from 'vue-router';

const routes = [
  {
    path: '',
    name: 'layout',
    component: RouterView,
    redirect: { name: "homePage" },
    children: [
      {
        path: '/',
        name: 'homePage',
        component: () => import('../views/PageHome.vue'),
      }
    ],
    meta: {
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

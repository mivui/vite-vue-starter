import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/pages/home'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/pages/test/Test.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFond',
    redirect: { name: 'index' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

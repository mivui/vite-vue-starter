import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/main'), // 懒加载组件
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFond',
    redirect: { name: 'index' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Base from '../views/Base.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'base',
    component: Base,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   try {

//   }
//   catch (error) {
//     //
//   };
// });

export default router;

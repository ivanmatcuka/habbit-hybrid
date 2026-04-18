import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { useUserStore } from '~shared/stores/user';

import SignIn from '@/views/SignIn.vue';
import TabsPage from '@/views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    redirect: '/tabs/dashboard',
  },
  { component: SignIn, name: 'signin', path: '/signin' },
  {
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard',
      },
      {
        component: () => import('@/views/HomePage.vue'),
        path: 'dashboard',
      },
      {
        component: () => import('@/views/HabitsTab.vue'),
        path: 'habits',
      },
      {
        component: () => import('@/views/Tab3Page.vue'),
        path: 'profile',
      },
    ],
    component: TabsPage,
    path: '/tabs/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const unauthRoutes = ['signin', 'signup', 'recover-password'];

router.beforeEach((to, _, next) => {
  const userStore = useUserStore();
  const isAuthRoute = unauthRoutes.includes(String(to.name));
  const isLoggedIn = userStore?.isLoggedIn;

  if (isLoggedIn && isAuthRoute) {
    console.log('User is already logged in, redirecting to home');
    return next({ name: 'home' });
  }

  if (!isLoggedIn && !isAuthRoute) {
    console.log('User is not logged in, redirecting to signin');
    return next({ name: 'signin' });
  }

  next();
});

export default router;

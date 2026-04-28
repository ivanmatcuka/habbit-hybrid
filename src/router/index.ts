import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import { useUserStore } from '@/stores/user';
import RecoverPasswordScreen from '@/views/RecoverPasswordScreen.vue';
import SignInScreen from '@/views/SignInScreen.vue';
import SignOutScreen from '@/views/SignOutScreen.vue';
import SignUpScreen from '@/views/SignUpScreen.vue';
import TabsPage from '@/views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    redirect: '/tabs',
  },
  { component: SignInScreen, name: 'signin', path: '/signin' },
  { component: SignUpScreen, name: 'signup', path: '/signup' },
  { component: SignOutScreen, name: 'signout', path: '/signout' },
  { component: RecoverPasswordScreen, name: 'recover-password', path: '/recover-password' },
  {
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard',
      },
      {
        component: () => import('@/views/HomeTab.vue'),
        path: 'dashboard',
      },
      {
        component: () => import('@/views/HabitsTab.vue'),
        name: 'habits',
        path: 'habits',
      },
      {
        component: () => import('@/views/SettingsTab.vue'),
        path: 'settings',
      },
    ],
    component: TabsPage,
    path: '/tabs/',
  },
  {
    component: () => import('@/views/AddHabitScreen.vue'),
    path: '/add',
  },
  {
    component: () => import('@/views/EditHabitScreen.vue'),
    path: '/edit/:id',
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

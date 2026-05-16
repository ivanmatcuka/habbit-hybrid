import { IonicVue } from '@ionic/vue';
import { createBootstrap } from 'bootstrap-vue-next';
import { localStorageService, userService } from 'habits-frontend';
import '@ionic/vue/css/palettes/dark.always.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';
import { createPinia } from 'pinia';

/* Theme variables */
import './theme/variables.scss';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { useUserStore } from './stores/user';

const pinia = createPinia();
const app = createApp(App).use(IonicVue).use(createBootstrap()).use(pinia).use(router);

if (localStorageService.getAccessToken()) {
  const userStore = useUserStore();

  userService.getUser().then(({ data, error }) => {
    const accessToken = localStorageService.getAccessToken();

    if (error) {
      console.error('Failed to fetch user:', error);
    } else if (data && accessToken) {
      userStore?.setUser(data, accessToken);
      router.push({ name: 'home' });
    }
  });
}

router.isReady().then(() => {
  app.mount('#app');
});

import { IonicVue } from '@ionic/vue';
import { createBootstrap } from 'bootstrap-vue-next';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import '@ionic/vue/css/palettes/dark.always.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';
import RowItem from '~shared/components/RowItem.vue';
import localStorageService from '~shared/services/localStorage';
import userService from '~shared/services/user';

/* Theme variables */
import './theme/variables.scss';

import { useUserStore } from '~shared/stores/user';

import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App).use(IonicVue).use(createBootstrap()).use(pinia).use(router);

app.component('RowItem', RowItem);

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

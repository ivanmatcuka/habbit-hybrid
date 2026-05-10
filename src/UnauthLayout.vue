<template>
  <ion-content>
    <slot />
  </ion-content>
  <ion-footer>
    <span class="p-2"> API URL: {{ apiUrl }} </span>
  </ion-footer>
</template>

<style lang="scss">
@use '~shared/assets/scss/variables.scss' as *;

ion-content {
  --padding-top: #{$spacer * 4};
  --padding-start: #{$spacer * 2};
  --padding-end: #{$spacer * 2};
  --padding-bottom: #{$spacer * 4};
}

ion-content::part(scroll) {
  margin-right: var(--ion-safe-area-right, 0);
  margin-left: var(--ion-safe-area-left, 0);
}
</style>

<script lang="ts">
import { IonContent, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonFooter },
  computed: {
    apiUrl() {
      return import.meta.env.VITE_API_URL;
    },
    isProd() {
      return import.meta.env.PROD;
    },
  },
} as Parameters<typeof defineComponent>);
</script>

<template>
  <ion-content>
    <slot />
  </ion-content>
  <ion-footer v-if="!apiUrl">
    <span class="p-2">
      {{ apiUrl }}
    </span>
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
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent },
  computed: {
    apiUrl() {
      return import.meta.env.VITE_API_URL;
    },
  },
} as Parameters<typeof defineComponent>);
</script>

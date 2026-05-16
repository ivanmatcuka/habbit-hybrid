<template>
  <ion-content>
    <slot />
  </ion-content>
</template>

<style lang="scss">
@use '../node_modules/habits-frontend/src/assets/scss/variables.scss' as *;

ion-content {
  --padding-top: #{$spacer * 4};
  --padding-start: #{$spacer * 2};
  --padding-end: #{$spacer * 2};
  --padding-bottom: #{$spacer * 4};
}
</style>

<script lang="ts">
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent },
} as Parameters<typeof defineComponent>);
</script>

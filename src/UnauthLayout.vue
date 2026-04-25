<template>
  <ion-content>
    <div class="w-100 h-100 d-flex flex-column align-items-center">
      <slot />
    </div>
  </ion-content>
</template>

<style lang="scss">
@use '~shared/assets/scss/variables.scss' as *;

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

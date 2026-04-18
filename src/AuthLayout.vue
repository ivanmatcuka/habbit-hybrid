<template>
  <ion-content>
    <slot />
  </ion-content>
</template>

<style lang="scss">
@import '~shared/assets/scss/variables.scss';

ion-content {
  --padding-top: #{$spacer * 8};
  --padding-start: #{$spacer * 2};
  --padding-end: #{$spacer * 2};
}
</style>

<script lang="ts">
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent },
} as Parameters<typeof defineComponent>);
</script>

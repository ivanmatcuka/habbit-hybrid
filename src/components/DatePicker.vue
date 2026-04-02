<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="goDayBack">
          <ion-icon :icon="chevronBackOutline" size="large" />
        </ion-button>
      </ion-buttons>

      <ion-title class="ion-text-center">
        {{ date.format('MMM Do YYYY') }}
      </ion-title>

      <ion-buttons slot="end">
        <ion-button :disabled="!canGoForward" @click="goDayForward">
          <ion-icon :icon="chevronForwardOutline" size="large" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

import WebDatePicker from '~shared/components/DatePicker.vue';
export default defineComponent({
  extends: WebDatePicker,
  components: { IonToolbar, IonTitle, IonHeader, IonButton, IonButtons, IonIcon },
  data: () => ({
    chevronBackOutline,
    chevronForwardOutline,
  }),
} as Parameters<typeof defineComponent>);
</script>

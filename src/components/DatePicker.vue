<template>
  <ion-buttons slot="start">
    <ion-button @click="goDayBack">
      <ion-icon :icon="chevronBackOutline" size="large" />
    </ion-button>
  </ion-buttons>

  <ion-title class="text-center">
    {{ date.format('MMM Do YYYY') }}
  </ion-title>

  <ion-buttons slot="end">
    <ion-button :disabled="!canGoForward" @click="goDayForward">
      <ion-icon :icon="chevronForwardOutline" size="large" />
    </ion-button>
  </ion-buttons>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonIcon, IonTitle } from '@ionic/vue';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import WebDatePicker from '~shared/components/DatePicker.vue';

export default defineComponent({
  components: { IonButton, IonButtons, IonIcon, IonTitle },
  data: () => ({
    chevronBackOutline,
    chevronForwardOutline,
  }),
  extends: WebDatePicker,
} as Parameters<typeof defineComponent>);
</script>

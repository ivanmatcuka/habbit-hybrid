<template>
  <ion-page>
    <auth-layout>
      <ion-content :fullscreen="true">
        <date-picker :date="date" @update:date="date = $event" />
      </ion-content>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import AuthLayout from '@/AuthLayout.vue';
import DatePicker from '@/components/DatePicker.vue';
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

import WebHomePage from '~shared/pages/Home.vue';

export default defineComponent({
  extends: WebHomePage,
  components: { IonPage, AuthLayout, IonContent, DatePicker },
} as Parameters<typeof defineComponent>);
</script>

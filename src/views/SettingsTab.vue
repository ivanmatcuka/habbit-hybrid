<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <auth-layout>
      <div class="d-flex flex-column gap-2 mb-4">
        <ion-list>
          <ion-item lines="none" router-link="/signout" type="button" router-direction="root">
            <ion-icon slot="start" color="white" :icon="logOutOutline" />
            <ion-label class="fs-6">Sign Out</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </auth-layout>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { logOutOutline } from 'ionicons/icons';

import AuthLayout from '@/AuthLayout.vue';
</script>

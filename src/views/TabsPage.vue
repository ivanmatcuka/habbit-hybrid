<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="habits" href="/tabs/habits">
          <ion-label>Habits</ion-label>
        </ion-tab-button>

        <ion-tab-button layout="icon-start" tab="settings" href="/tabs/settings">
          <ion-icon aria-hidden="true" :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/vue';
import { personOutline } from 'ionicons/icons';
</script>

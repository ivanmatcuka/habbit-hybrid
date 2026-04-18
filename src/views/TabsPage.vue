<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <template v-slot:bottom>
        <ion-tab-bar>
          <ion-tab-button tab="dashboard" href="/tabs/dashboard">
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="habits" href="/tabs/habits">
            <ion-label>Habits</ion-label>
          </ion-tab-button>

          <ion-tab-button layout="icon-start" tab="profile" href="/tabs/profile">
            <ion-icon aria-hidden="true" :icon="personOutline" />
            <!-- <ion-label>Profile</ion-label> -->
          </ion-tab-button>
        </ion-tab-bar>
      </template>
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

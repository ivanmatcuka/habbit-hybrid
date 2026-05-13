<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Signin Out...</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { SignOutPage } from 'habits-frontend/pages';

export default {
  components: { IonHeader, IonPage, IonTitle, IonToolbar },
  extends: SignOutPage,
};
</script>

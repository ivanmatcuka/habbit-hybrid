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
import WebSignOut from '~shared/pages/SignOut.vue';

export default {
  components: { IonHeader, IonPage, IonTitle, IonToolbar },
  extends: WebSignOut,
};
</script>

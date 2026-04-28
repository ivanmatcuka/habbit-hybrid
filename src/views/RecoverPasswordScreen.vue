<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Recover Password</ion-title>
      </ion-toolbar>
    </ion-header>

    <unauth-layout>
      <b-form v-if="!isSent" class="d-flex flex-column mt-5 gap-4" @submit="submit">
        <h-input
          label="Email"
          description="Enter your email to recover password"
          placeholder="Enter email"
          name="email"
          type="email"
          :value="email"
          :error="error"
          @update:value="email = $event"
        />

        <div v-if="error && !error.errors">
          <ion-label color="danger">Error occurred. Please try again later </ion-label>
        </div>

        <div class="d-flex gap-2">
          <ion-button :disabled="isLoading" type="submit" fill="outline">Recover</ion-button>
          <ion-button :disabled="isLoading" router-link="/signin" router-direction="back"
            >Sign In</ion-button
          >
        </div>
      </b-form>
      <div v-else>
        <h2 class="text-white">Check your email!</h2>
        <p class="text-muted">
          We have sent you an email with instructions to recover your password.
        </p>
        <ion-button :disabled="isLoading" fill="outline" router-link="/signin">Sign In</ion-button>
      </div>
    </unauth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HInput from '~shared/components/HInput.vue';
import WebRecoverPasswordPage from '~shared/pages/RecoverPassword.vue';

import UnauthLayout from '@/UnauthLayout.vue';

export default {
  components: {
    HInput,
    IonButton,
    IonHeader,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    UnauthLayout,
  },
  extends: WebRecoverPasswordPage,
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign In</ion-title>
      </ion-toolbar>
    </ion-header>

    <unauth-layout>
      <form class="d-flex flex-column my-5 gap-4 w-100" @submit="submit">
        <!-- Email field -->
        <h-input
          label="Email"
          description="Enter your email"
          placeholder="Enter email"
          name="email"
          type="email"
          :value="email"
          :error="error"
          @update:value="email = $event"
        />

        <!-- Password field -->
        <h-input
          label="Password"
          description="Enter your password"
          placeholder="Enter password"
          name="password"
          type="password"
          :value="password"
          :error="error"
          @update:value="password = $event"
        />

        <div v-if="error && !error.errors">
          <ion-label v-if="error?.message" color="danger">{{ error.message }} </ion-label>
          <ion-label v-else color="danger">Error occurred. Please try again later </ion-label>
        </div>

        <div class="d-flex flex-column gap-2">
          <div class="d-flex align-items-center gap-2">
            <ion-spinner v-if="isLoading"></ion-spinner>
            <ion-button v-else type="submit" fill="outline"> Sign In </ion-button>
            <ion-button
              :disabled="isLoading"
              fill="solid"
              router-link="/signup"
              router-direction="forward"
              >Sign Up</ion-button
            >
          </div>
          <div>
            <ion-button :disabled="isLoading" fill="clear" router-link="/recover-password"
              >Forgot Password?</ion-button
            >
          </div>
        </div>
      </form>
    </unauth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HInput from '~shared/components/HInput.vue';
import WebSignIn from '~shared/pages/SignIn.vue';

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
  extends: WebSignIn,
};
</script>

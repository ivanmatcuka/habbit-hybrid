<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>

    <unauth-layout>
      <b-form class="d-flex flex-column my-5 gap-4 w-100" @submit="submit">
        <h-input
          label="Name"
          description="Enter your name"
          placeholder="Enter name"
          name="name"
          type="text"
          :error="error"
          :value="name"
          @update:value="name = $event"
        />

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

        <!-- Password confirmation field -->
        <h-input
          label="Confirm Password"
          description="Re-enter your password"
          placeholder="Confirm password"
          name="confirm_password"
          type="password"
          :value="confirmPassword"
          :error="confirmPasswordError"
          @update:value="confirmPassword = $event"
        />

        <ion-label v-if="error?.message && !error?.errors" color="danger">
          Error occurred. Please try again later
        </ion-label>

        <div class="d-flex gap-2">
          <ion-button :loading="isLoading" type="submit" fill="outline">Sign Up</ion-button>
          <ion-button
            :disabled="isLoading"
            router-link="/signin"
            router-direction="back"
            fill="solid"
            >Sign In</ion-button
          >
        </div>
      </b-form>
    </unauth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { HInput } from 'habits-frontend/components';
import { SignUpPage } from 'habits-frontend/pages';

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
  extends: SignUpPage,
};
</script>

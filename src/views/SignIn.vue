<template>
  <ion-page>
    <auth-layout>
      <form @submit="submit">
        <ion-title>Sign In</ion-title>

        <!-- Email field -->
        <ion-item>
          <ion-input
            v-model="email"
            label="Email"
            helper-text="Enter your email"
            placeholder="Enter email"
            name="email"
            type="email"
            fill="outline"
            :value="email"
            :error-text="error?.errors?.email?.[0]"
          />
        </ion-item>

        <!-- Password field -->
        <ion-item>
          <ion-input
            v-model="password"
            label="Password"
            placeholder="Enter password"
            helper-text="Enter your password"
            name="password"
            type="password"
            fill="outline"
            :value="password"
            :error-text="error?.errors?.password?.[0]"
          />
        </ion-item>

        <div v-if="error?.message && !error.errors">
          <span v-if="error?.status === 401" text-variant="danger">{{ error.message }} </span>
          <span v-else text-variant="danger">Error occurred. Please try again later </span>
        </div>

        <ion-button :loading="isLoading" type="submit" variant="dark" loading-fill>
          Sign In
        </ion-button>
        <ion-button :disabled="isLoading" variant="outline-light" to="/signup">Sign Up</ion-button>
        <ion-button :disabled="isLoading" variant="link" to="/recover-password"
          >Forgot Password?</ion-button
        >
      </form>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonInput, IonItem, IonPage, IonTitle } from '@ionic/vue';
import SignIn from '~shared/pages/SignIn.vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: { AuthLayout, IonButton, IonInput, IonItem, IonPage, IonTitle },
  extends: SignIn,
};
</script>

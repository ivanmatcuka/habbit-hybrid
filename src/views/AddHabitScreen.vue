<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Add</ion-title>
      </ion-toolbar>
    </ion-header>

    <auth-layout>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content />
      </ion-refresher>

      <b-form class="d-flex flex-column gap-4" @submit="submit">
        <h2>Add Task</h2>

        <!-- Title field -->
        <b-form-group
          label-size="lg"
          label="Title"
          description="What exactly do you want to do repeatedly?"
          label-class="mb-1 p-0"
        >
          <b-form-input
            v-model="title"
            class="px-3 rounded-1 py-2 lh-1 border-2 text-white"
            placeholder="Enter title"
            :disabled="isLoading"
            required
          />
        </b-form-group>

        <!-- Frequency -->
        <b-form-group
          label-size="lg"
          label-class="mb-1 p-0"
          label="Frequency"
          description="How many times per week do you want to do this?"
        >
          <b-form-select
            v-model="frequency"
            :options="FREQUENCY_OPTIONS"
            :disabled="isLoading"
            required
            class="px-3 rounded-1 py-2 lh-1 border-2 text-white"
          />
        </b-form-group>

        <!-- Type -->
        <b-form-group
          label-size="lg"
          label-class="mb-1 p-0"
          label="Type"
          description="Do you want to do this or avoid doing this?"
        >
          <b-form-select
            v-model="type"
            :options="TYPE_OPTIONS"
            :disabled="isLoading"
            required
            class="px-3 rounded-1 py-2 lh-1 border-2 text-white"
          />
        </b-form-group>

        <div>
          <ion-spinner v-if="isLoading"></ion-spinner>
          <ion-button v-else type="submit" fill="outline" :loading="isLoading">Add</ion-button>
        </div>
      </b-form>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import WebAddHabitPage from '~shared/pages/Add.vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: {
    AuthLayout,
    IonBackButton,
    IonButton,
    IonButtons,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSpinner,
    IonTitle,
    IonToolbar,
  },
  extends: WebAddHabitPage,
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Edit</ion-title>
      </ion-toolbar>
    </ion-header>

    <page-placeholder v-if="isLoading && !task" />

    <auth-layout v-else-if="task">
      <b-form class="d-flex flex-column mt-5 gap-4" @submit="submit">
        <h1 class="text-white">Edit Task "{{ task.title }}"</h1>

        <!-- Title field -->
        <b-form-group
          label-size="lg"
          label="Title"
          description="What exactly do you want to do repeatedly?"
          label-class="mb-1 p-0"
        >
          <b-form-input
            v-model="task.title"
            class="px-3 rounded-1 py-2 lh-1 border-2 text-white"
            placeholder="Enter title"
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
            v-model="task.frequency"
            :options="FREQUENCY_OPTIONS"
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
            v-model="task.type"
            :options="TYPE_OPTIONS"
            required
            class="px-3 rounded-1 py-2 lh-1 border-2 text-white"
          />
        </b-form-group>

        <!-- Button -->
        <div>
          <ion-spinner v-if="isLoading"></ion-spinner>
          <ion-button v-else type="submit" fill="outline" :disabled="isLoading">Save</ion-button>
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
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import PagePlaceholder from '~shared/components/PagePlaceholder.vue';
import WebEditHabitPage from '~shared/pages/Edit.vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: {
    AuthLayout,
    IonBackButton,
    IonButton,
    IonButtons,
    IonHeader,
    IonPage,
    IonSpinner,
    IonTitle,
    IonToolbar,
    PagePlaceholder,
  },
  extends: WebEditHabitPage,
};
</script>

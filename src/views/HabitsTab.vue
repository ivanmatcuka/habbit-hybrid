<template>
  <ion-page>
    <auth-layout>
      <div v-if="isLoading" class="d-flex flex-column gap-2 mb-6">
        <ion-title size="small">Loading...</ion-title>
        <habit-item-placeholder v-for="value in Array(3).fill(0)" :key="value" />
      </div>

      <div v-else class="d-flex flex-column gap-4 mb-6">
        <ion-title size="small">Things</ion-title>

        <div class="d-flex flex-column gap-2">
          <ion-title size="small">To Do</ion-title>
          <habit-item
            v-for="task in tasks.filter((task) => task.type === 'do')"
            :key="task.id"
            :task="task"
            :on-delete="confirmDelete"
          />
        </div>

        <div class="d-flex flex-column gap-2">
          <ion-title size="small">To Avoid</ion-title>
          <habit-item
            v-for="task in tasks.filter((task) => task.type === 'avoid')"
            :key="task.id"
            :task="task"
            :on-delete="confirmDelete"
          />
        </div>
      </div>

      <ion-button variant="dark" to="/add">Add</ion-button>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonTitle } from '@ionic/vue';
import HabitItem from '~shared/components/HabitItem.vue';
import HabitItemPlaceholder from '~shared/components/HabitItemPlaceholder.vue';
import WebHabitsPage from '~shared/pages/Habits.vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: { AuthLayout, HabitItem, HabitItemPlaceholder, IonButton, IonPage, IonTitle },
  extends: WebHabitsPage,
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Things</ion-title>
      </ion-toolbar>
    </ion-header>

    <auth-layout>
      <div v-if="isLoading" class="d-flex flex-column gap-4">
        <h2 size="small">Loading...</h2>
        <habit-item-placeholder v-for="value in Array(3).fill(0)" :key="value" />
      </div>

      <div v-else class="d-flex flex-column justify-start gap-4">
        <div class="d-flex flex-column gap-2">
          <h2>To Do</h2>
          <habit-item
            v-for="task in tasks.filter((task: any) => task.type === 'do')"
            :key="task.id"
            :task="task"
            :on-delete="confirmDelete"
          />
        </div>

        <div class="d-flex flex-column gap-2">
          <h2>To Avoid</h2>
          <habit-item
            v-for="task in tasks.filter((task: any) => task.type === 'avoid')"
            :key="task.id"
            :task="task"
            :on-delete="confirmDelete"
          />
        </div>

        <div>
          <ion-button fill="outline" router-link="/add">Add</ion-button>
        </div>
      </div>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HabitItem from '~shared/components/HabitItem.vue';
import HabitItemPlaceholder from '~shared/components/HabitItemPlaceholder.vue';
import WebHabitsPage from '~shared/pages/Habits.vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: {
    AuthLayout,
    HabitItem,
    HabitItemPlaceholder,
    IonButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  extends: WebHabitsPage,
};
</script>

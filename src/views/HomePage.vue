<template>
  <ion-page>
    <auth-layout>
      <div class="d-flex flex-column ion-gap-6">
        <date-picker :date="date" @update:date="date = $event" />

        <div v-if="isLoading" class="ion-gap-2">
          <ion-title size="small">Loading...</ion-title>
          <todo-item-placeholder v-for="value in Array(3).fill(0)" :key="value" />
        </div>

        <div v-else class="ion-gap-8">
          <div v-if="uncompletedTasks.length" class="ion-gap-2">
            <ion-title size="small">To Do</ion-title>
            <todo-item
              v-for="task in uncompletedTasks"
              :key="task.id"
              :done="false"
              :task="task"
              :on-do="() => completeTask(task.id)"
              :is-completing="isCompletingId === task.id"
            />
          </div>
          <div v-if="completedTasks.length" class="ion-gap-2">
            <ion-title size="small">Done!</ion-title>
            <todo-item
              v-for="task in completedTasks"
              :key="task.id"
              :done="true"
              :task="task"
              :on-do="() => uncompleteTask(task)"
              :is-completing="isCompletingId === task.id"
            />
          </div>
          <div v-if="uncavedTasks.length" class="ion-gap-2">
            <ion-title size="small">To Avoid</ion-title>
            <todo-item
              v-for="task in uncavedTasks"
              :key="task.id"
              :done="false"
              :task="task"
              :on-do="() => completeTask(task.id)"
              :is-completing="isCompletingId === task.id"
            />
          </div>
          <div v-if="cavedTasks.length" class="ion-gap-2">
            <ion-title size="small">Caved</ion-title>
            <todo-item
              v-for="task in cavedTasks"
              :key="task.id"
              :done="true"
              :task="task"
              :on-do="() => uncompleteTask(task)"
              :is-completing="isCompletingId === task.id"
            />
          </div>
        </div>
      </div>
    </auth-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle } from '@ionic/vue';
import TodoItem from '~shared/components/TodoItem.vue';
import TodoItemPlaceholder from '~shared/components/TodoItemPlaceholder.vue';
import WebHomePage from '~shared/pages/Home.vue';

import AuthLayout from '@/AuthLayout.vue';
import DatePicker from '@/components/DatePicker.vue';

export default {
  components: { AuthLayout, DatePicker, IonPage, IonTitle, TodoItem, TodoItemPlaceholder },
  extends: WebHomePage,
};
</script>

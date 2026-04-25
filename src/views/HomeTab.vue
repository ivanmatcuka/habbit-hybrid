<template>
  <ion-page>
    <date-picker :date="date" @update:date="date = $event" />

    <auth-layout>
      <div class="d-flex flex-column ion-gap-4">
        <div v-if="isLoading" class="ion-gap-2">
          <h2>Loading...</h2>
          <todo-item-placeholder v-for="value in Array(3).fill(0)" :key="value" />
        </div>

        <div v-else class="ion-gap-4">
          <div v-if="uncompletedTasks.length" class="ion-gap-2">
            <h2>To Do</h2>
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
            <h2>Done!</h2>
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
            <h2>To Avoid</h2>
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
            <h2>Caved</h2>
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
import { IonPage } from '@ionic/vue';
import TodoItem from '~shared/components/TodoItem.vue';
import TodoItemPlaceholder from '~shared/components/TodoItemPlaceholder.vue';
import WebHomePage from '~shared/pages/Home.vue';

import AuthLayout from '@/AuthLayout.vue';
import DatePicker from '@/components/DatePicker.vue';

export default {
  components: { AuthLayout, DatePicker, IonPage, TodoItem, TodoItemPlaceholder },
  extends: WebHomePage,
};
</script>

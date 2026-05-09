<template>
  <auth-layout>
    <div class="d-flex flex-column gap-4">
      <!-- Title field -->
      <div>
        <b-placeholder size="sm" animation="wave" />
        <b-placeholder size="lg" animation="wave" />
        <b-placeholder size="xs" animation="wave" />
      </div>

      <div>
        <b-placeholder size="sm" animation="wave" />
        <b-placeholder size="lg" animation="wave" />
        <b-placeholder size="xs" animation="wave" />
      </div>

      <!-- Button -->
      <ion-spinner />
    </div>
  </auth-layout>
</template>

<script lang="ts">
import { IonSpinner } from '@ionic/vue';

import AuthLayout from '@/AuthLayout.vue';

export default {
  components: { AuthLayout, IonSpinner },
  name: 'PagePlaceholder',
};
</script>

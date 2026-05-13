import { userStoreDefinition } from 'habits-frontend/store';
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', userStoreDefinition);

export { useUserStore };

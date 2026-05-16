import { userStoreDefinition } from 'habits-frontend';
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', userStoreDefinition);

export { useUserStore };

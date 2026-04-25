import { defineStore } from 'pinia';
import { userStoreDefinition } from '~shared/stores/user';

const useUserStore = defineStore('user', userStoreDefinition);

export { useUserStore };

import { defineStore } from 'pinia';

export const currentUser = defineStore('currentUser', {
  state: () => ({
    currentUserName: '',
  }),
  actions: {
    setUser(name) {
      this.currentUserName = name
    },
  },
  getters: {
    getCurrentUser: (state) => state.currentUserName,
  },
});
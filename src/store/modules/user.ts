import { defineStore } from 'pinia'

export const useUserData = defineStore({
  id: 'userData',
  state: () => ({
    name: '',
    token: '',
  }),
  actions: {
    setName(_name: string) {
      this.name = _name
    },
    setToken(_token: string) {
      this.token = _token
    },
  },
  persist: {
    enabled: true,
    strategies: [{
      key: 'userData',
      storage: localStorage,
    }],
  },
})

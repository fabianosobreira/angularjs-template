export default class AuthService {
  constructor($q, $timeout, userStoreService) {
    "ngInject"
    this.$q = $q
    this.$timeout = $timeout
    this.userStoreService = userStoreService
  }

  login() {
    const { $q, $timeout } = this
    return $timeout(() => {
      this.userStoreService.set({ username: "user" })
      return $q.resolve()
    }, 10)
  }

  logout() {
    const { $q, $timeout } = this
    return $timeout(() => {
      this.userStoreService.clear()
      return $q.resolve()
    }, 10)
  }

  isAuthenticated() {
    return this.userStoreService.get() !== null
  }
}

export default class AuthService {
  constructor($q, $timeout) {
    "ngInject"
    this.$q = $q
    this.$timeout = $timeout
  }

  login() {
    const { $q, $timeout } = this
    return $timeout(() => {
      localStorage["isAuthenticated"] = JSON.stringify(true)
      return $q.resolve()
    }, 10)
  }

  logout() {
    const { $q, $timeout } = this
    return $timeout(() => {
      localStorage["isAuthenticated"] = JSON.stringify(false)
      return $q.resolve()
    }, 10)
  }

  isAuthenticated() {
    return (
      localStorage["isAuthenticated"] &&
      JSON.parse(localStorage["isAuthenticated"])
    )
  }
}

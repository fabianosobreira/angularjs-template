class LoginController {
  constructor($state, authService) {
    "ngInject"
    this.$state = $state
    this.authService = authService
  }

  login() {
    const returnToOriginalState = () => {
      const state = this.returnTo.state()
      const params = this.returnTo.params()
      const options = { ...this.returnTo.options(), reload: true }
      this.$state.go(state, params, options)
    }

    this.authService.login().then(returnToOriginalState)
  }

  logout() {
    this.authService.logout().then(() => {
      this.$state.go("home")
    })
  }
}

export default {
  template: require("./login.html"),
  controller: LoginController,
  bindings: {
    $transition$: "<",
    returnTo: "<"
  }
}
import styles from "./login.css"

const html = /*html*/ `
  <h1 class="${styles.title}">login.html</h1>
  <div>
    <button ng-click="$ctrl.login()">Login</button>
  </div>  
`

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
}

export default {
  template: html,
  controller: LoginController,
  bindings: {
    $transition$: "<",
    returnTo: "<"
  }
}

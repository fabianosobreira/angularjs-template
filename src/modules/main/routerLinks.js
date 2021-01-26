const html = /*html*/ `
  <ul>
    <li>
      <a ui-sref="app.home">Home</a>
    </li>
    <li>
      <a ui-sref="app.login">Login</a>
      <span ng-show="$ctrl.isAuthenticated">
        (authenticated) <button ng-click="$ctrl.logout()">Logout</button>
      </span>
      <span ng-show="!$ctrl.isAuthenticated">(not authenticated)</span>
    </li>
    <li>
      <a ui-sref="app.restricted">Restricted</a>
    </li>
  </ul>`

class RouterLinksController {
  constructor($scope, $state, authService) {
    "ngInject"
    this.isAuthenticated = false
    this.$scope = $scope
    this.$state = $state
    this.authService = authService
  }

  $onInit() {
    const { $scope, authService } = this
    $scope.$watch(
      () => authService.isAuthenticated(),
      (value) => (this.isAuthenticated = value)
    )
  }

  logout() {
    this.authService.logout().then(() => {
      this.$state.go("app.home")
    })
  }
}

export default {
  template: html,
  controller: RouterLinksController,
  bindings: {
    $transition$: "<",
    returnTo: "<",
  },
}

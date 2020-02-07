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
      value => (this.isAuthenticated = value)
    )
  }

  logout() {
    this.authService.logout().then(() => {
      this.$state.go("app.home")
    })
  }
}

export default {
  template: require("./routerLinks.html"),
  controller: RouterLinksController,
  bindings: {
    $transition$: "<",
    returnTo: "<"
  }
}

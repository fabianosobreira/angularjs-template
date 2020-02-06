class RouterLinksController {
  constructor($scope, authService) {
    "ngInject"
    this.isAuthenticated = false
    this.$scope = $scope
    this.authService = authService
  }

  $onInit() {
    const { $scope, authService } = this
    $scope.$watch(
      () => authService.isAuthenticated,
      value => (this.isAuthenticated = value)
    )
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

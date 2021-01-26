import appModule from "./app"
import states from "./states"

appModule.config(($compileProvider, $stateProvider, $urlServiceProvider) => {
  "ngInject"

  $compileProvider.debugInfoEnabled(!PRODUCTION)
  $compileProvider.commentDirectivesEnabled(!PRODUCTION)
  $compileProvider.cssClassDirectivesEnabled(!PRODUCTION)

  states.forEach((state) => $stateProvider.state(state))
  $urlServiceProvider.rules.otherwise({ state: "app.home" })
})

appModule.run(($uiRouter, $transitions) => {
  "ngInject"

  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {
    priority: 10,
  })

  if (!PRODUCTION) {
    import("@uirouter/visualizer").then((module) =>
      $uiRouter.plugin(module.Visualizer)
    )
  }
})

const requiresAuthCriteria = {
  to: (state) => state.data && state.data.requiresAuth,
}

const redirectToLogin = (transition) => {
  const authService = transition.injector().get("authService")
  const $state = transition.router.stateService
  if (!authService.isAuthenticated()) {
    return $state.target("app.login", undefined, { location: false })
  }
}

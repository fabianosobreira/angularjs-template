export default [
  {
    name: "app",
    url: "",
    redirectTo: "app.home",
  },

  {
    name: "app.home",
    url: "/home",
    component: "homeView",
  },

  {
    name: "app.login",
    url: "/login",
    component: "loginView",
    resolve: { returnTo: returnTo },
  },

  {
    name: "app.restricted",
    url: "/restricted",
    component: "restrictedView",
    data: { requiresAuth: true },
  },
]

function returnTo($transition$) {
  "ngInject"

  if ($transition$.redirectedFrom() != null) {
    return $transition$.redirectedFrom().targetState()
  }

  const $state = $transition$.router.stateService

  if ($transition$.from().name !== "") {
    return $state.target($transition$.from(), $transition$.params("from"))
  }

  return $state.target("home")
}

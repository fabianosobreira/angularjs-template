export default [
  {
    name: "home",
    url: "/",
    component: "home"
  },

  {
    name: "login",
    url: "/login",
    component: "login",
    resolve: { returnTo: returnTo }
  },

  {
    name: "restricted",
    url: "/restricted",
    component: "restricted",
    data: { requiresAuth: true }
  }
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

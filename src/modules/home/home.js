import template from "./home.tpl"

class HomeController {
  constructor() {
    "ngInject"
  }
}

export default {
  template: template,
  controller: HomeController,
  bindings: {
    $transition$: "<",
  },
}

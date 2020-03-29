import html from "./home.tpl"

class HomeController {
  constructor() {
    "ngInject"
  }
}

export default {
  template: html,
  controller: HomeController,
  bindings: {
    $transition$: "<"
  }
}

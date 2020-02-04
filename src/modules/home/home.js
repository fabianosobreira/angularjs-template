class HomeController {
  constructor() {
    "ngInject"
  }
}

export default {
  template: require("./home.html"),
  controller: HomeController,
  bindings: {
    $transition$: "<"
  }
}

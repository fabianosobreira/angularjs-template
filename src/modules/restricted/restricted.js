class RestrictedController {
  constructor() {
    "ngInject"
  }
}

export default {
  template: require("./restricted.html"),
  controller: RestrictedController,
  bindings: {
    $transition$: "<"
  }
}

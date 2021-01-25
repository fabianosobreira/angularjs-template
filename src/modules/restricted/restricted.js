import template from "./restricted.tpl"

class RestrictedController {
  constructor() {
    "ngInject"
  }
}

export default {
  template: template,
  controller: RestrictedController,
  bindings: {
    $transition$: "<",
  },
}

import styles from "./home.css"

const html = /*html*/ `
  <h1 class="${styles.title}">home.html</h1>
`

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

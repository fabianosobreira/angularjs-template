import angular from "angular"
import restricted from "./restricted"

const module = angular
  .module("restricted", [])
  .component("restrictedView", restricted)

export default module.name

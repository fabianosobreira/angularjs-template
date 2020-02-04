import angular from "angular"
import restricted from "./restricted"

const module = angular
  .module("restricted", [])
  .component("restricted", restricted)

export default module.name

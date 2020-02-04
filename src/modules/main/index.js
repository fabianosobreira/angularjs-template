import angular from "angular"
import routerLinks from "./routerLinks"

const module = angular.module("main", []).component("aRouterLinks", routerLinks)

export default module.name

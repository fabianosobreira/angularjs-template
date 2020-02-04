import angular from "angular"
import home from "./home"

const module = angular.module("home", []).component("homeView", home)

export default module.name

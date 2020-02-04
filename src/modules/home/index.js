import angular from "angular"
import home from "./home"

const module = angular.module("home", []).component("home", home)

export default module.name

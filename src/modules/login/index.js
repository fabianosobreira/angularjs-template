import angular from "angular"
import login from "./login"

const module = angular.module("login", []).component("login", login)

export default module.name

import angular from "angular"
import login from "./login"

const module = angular.module("login", []).component("loginView", login)

export default module.name

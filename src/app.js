import "normalize.css"
import angular from "angular"
import uirouter from "@uirouter/angularjs"
import home from "./modules/home"
import login from "./modules/login"
import restricted from "./modules/restricted"
import authService from "./services/authService"

export default angular
  .module("app", [uirouter, home, login, restricted])
  .service("authService", authService)

import "normalize.css"
import angular from "angular"
import uirouter from "@uirouter/angularjs"
import main from "./modules/main"
import home from "./modules/home"
import login from "./modules/login"
import restricted from "./modules/restricted"
import authService from "./services/authService"
import userStoreService from "./services/userStoreService"

export default angular
  .module("app", [uirouter, main, home, login, restricted])
  .service("authService", authService)
  .service("userStoreService", userStoreService)

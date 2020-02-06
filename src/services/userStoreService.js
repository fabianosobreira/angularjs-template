const STORAGE_KEY = "user"

export default class UserStoreService {
  constructor() {
    "ngInject"
  }

  get() {
    return localStorage[STORAGE_KEY]
      ? JSON.parse(localStorage[STORAGE_KEY])
      : null
  }

  set(user) {
    localStorage[STORAGE_KEY] = JSON.stringify(user)
  }

  clear() {
    localStorage.removeItem(STORAGE_KEY)
  }
}

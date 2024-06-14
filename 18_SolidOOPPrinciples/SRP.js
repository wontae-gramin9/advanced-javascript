// Single Responsibility Principle
// A class should only have one job or responsibilty
class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  authenticate(inputPassword) {
    return this.password === inputPassword
  }

  save() {
    console.log("DB connection")
    console.log(`db.saveUser(${this.user})`)
  }
}

// ↓

// User's attribute and its management
class UserSRP {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  authenticate(inputPassword) {
    return this.password === inputPassword
  }
}

// User data persistance
class UserDataManager {
  static save(user) {
    console.log("DB connection")
    console.log(`db.saveUser(${this.user})`)
  }
}
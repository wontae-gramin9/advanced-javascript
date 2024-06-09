class User {
  static connection

  static {
    // static initailization block
    // 초기화할때 무언가 로직이 필요할 때
    console.log('static initailization block this: ', this);
    this.connection = true ?
      this.loadDevConnection() :
      this.loadProdConnection()
  }

  static loadProdConnection() {

  }

  static loadDevConnection() {

  }

  #nationality = "Korean"
  #changeNationality(newNationality) {
    this.#nationality = newNationality
  }

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  setFullname(newFullname) {
    if (typeof newFullname !== "string")
      throw new Error("not a string")
    const [firstName, lastName] = string.split(" ")
    this.firstName = firstName
    this.lastName = lastName
  }

  set fullName(string) {
    this.setFullname(string)
  }

  get nationality() {
    return this.#nationality
  }
}

const user = new User()
console.log(user.nationality)



class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  superGreet() {
    console.log(`#1 ${this.firstName}`)

    setTimeout(function () {
      console.log(`#2 ${this.firstName}`)
    }, 500)

    // 화살표함수는 부르는 객체에 상관없이
    // 해당 인스턴스를 this로 가진다(this가 바뀌지 않는다)
    setTimeout(() => {
      console.log(`#3 ${this.firstName}`)
    }, 1000)
  }
}


let kitty = new Cat('Kitty')
kitty.superGreet()
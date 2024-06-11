// New 키워드
// 1. create an empty obj, sets this to be that object
// 2. return this at the end of the code
// 3. links the object's prototype to its constructor

// constructor function, Upper case conventionally
function Dog(name, breed) {
  console.log(this)
  this.name = name
  this.breed = breed
  this.bark = function () {
    return `${this.name} barks`
  }
  this.sleep = function () {
    return `${this.name} is sleeping`
  }
}

// new없이 부르면 this가 window/global에 할당된다
const wyatt = Dog('Wyatt', 'Golden')
console.log('wyatt: ', wyatt);
// new를 붙이면, this = {}가 생성, this에 property가 할당되고
// 풍성해진 this가 return된다
const elton = new Dog('Elton', 'Aussie')
const jimmy = new Dog('Jimmy', 'Mix')
console.log('elton prototype: ', elton.__proto__)
console.log(Object.getPrototypeOf(elton))

function User(username, email) {
  this.username = username
  this.email = email
  this.isAdmin = false
}

const colt = new User('colt', 'colt@gmail.com')

// Prototype
class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  meow() {
    return `${this.name} meows`
  }
  sleep() {
    return `${this.name} is sleeping`
  }
}

const blue = new Cat("Blue", 'mix')
const nabby = new Cat("Nabby", 'mix')
console.log('blue: ', blue);
// 1. class로 instance를 만들면 method는 prototype에 나온다
// 2. constructor function으로 instance를 만들면 method도 객체 property로 나온다
// 2번일때는 method가 새 instance마다 계속 복사되어 할당됩니다
// 즉, 100개의 객체가 있으면 100개의 다른 메소드가 생기는 것
console.log("constructor function의 메소드는 각각 같은가?", elton.bark === jimmy.bark)
console.log("class의 메소드는 각각 같은가?", blue.meow === nabby.meow)
console.log("method는 prototype에 저장되기 떄문", blue.__proto__ === nabby.__proto__)

// 2번의 경우는 매우 많은 메모리가 필요한데, 어떻게 메소드를 공유할 수 있을까?
// here where prototype comes in, where shared functionalities live
// 모든 obj는 prototype property(__proto__)를 가지고, prototype 자체도 객체입니다
// prototype으로 상속(prototype chaining)
Dog.prototype.eat = function () {
  return `${this.name} eats`
}
Dog.prototype.shit = function () {
  return `${this.name} takes shits`
}
// 이러면 __proto__에 들어갑니다
console.log(elton.eat())
console.log(elton.shit())

const myObj = {
  color: "purple",
  score: 99,
  greet() {
    console.log("Hi")
  }
}

const arr = [1, 2, 3]
// 자주 쓰는 forEach, includes 같은 메소드들은 개별 객체의 property에 있는게 아닌
// prototype의 메소드에 들어가 있다.
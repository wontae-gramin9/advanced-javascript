const grandParent = {
  greet() {
    return "Hi there"
  }
}

const parent = {
  color: 'purple',
  sing() {
    return "La La LA"
  },
  __proto__: grandParent
}

const child = {
  num: 2,
  // prototype도 객체라서 technically possible
  __proto__: parent
}

// __proto__를 property로 일일히 주지 않고 chaining을 할 수 있다
// inheritance는 property의 chaining으로 이루어진다
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return `${this.name} barks`
  }
  sleep() {
    return `${this.name} is sleeping`
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed)
    this.owner = owner
  }
  alert() {
    return `${this.name} alerts, good dog.`
  }
}
const chaco = new GuideDog('chaco', 'mix', 'wontae')
console.log(chaco)
// GuideDog instance
console.log(chaco.__proto__)
// GuideDog proto that has alert() and Dog proto
console.log(chaco.__proto__.__proto__)
// Dog proto that has Dog property&method and Object proto
console.log(chaco.__proto__.__proto__)
// The end is null → object extends null.

const person = {
  sing() {
    return 'LALALa'
  },
  isHuman: true
}
// 만들어지는 object의 prototype을 person으로!
const tom = Object.create(person)
console.log(tom.sing())
console.log(tom.isHuman)

console.log(Object.getPrototypeOf(tom))
console.log(Object.setPrototypeOf(tom, { isHuman: false }))
console.log(person.isPrototypeOf(tom))
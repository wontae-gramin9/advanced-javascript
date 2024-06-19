const cat = {
  name: "Blue Steele",
  age: 7,
  breed: "Scottish Fold",
}

// Proxy traps
const handler = {
  get: function (obj, property) {
    return obj[property]
    // return `LOL` // catProxy의 어떤 prop을 넣어도 LOL을 리턴한다
  },
  set: function (obj, property, value) {
    // 이렇게 조건을 걸 수 있는것이 Proxy를 가지는 이유
    // 그래서 trap이라고 불리는 것
    if (property === "age") {
      if (value < 0) {
        throw new Error("Age can't be negative")
      } else {
        obj[property] = value
      }
    }
  }
}

const catProxy = new Proxy(cat, handler)
console.log(catProxy.name)
console.log(catProxy.breed)
console.log(catProxy.age)
console.log(catProxy.chicken = "owns")
console.log(catProxy.chicken)

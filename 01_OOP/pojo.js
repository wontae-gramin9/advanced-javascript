const pet = {
  species: "Dong",
  name: "Elton",
  age: 1.5,
}

console.log(pet.name)
console.log(pet["name"])

// 1. 다른 언어는 에러를 내지만, js는 없으면 undefiend를 낸다
console.log(pet.hurry)

// Computed Property
const key = "speices"
console.log(pet[key])
// 2. All keys are stringified
pet[1] = "hello"
pet["1"] = "goodbye"
pet[true] = "boolean"
console.log(pet)
console.log(pet["true"])
// 3. values can be any objects. 함수도 가능(함수 표현식이 되겠다)
pet.bark = function () {
  console.log("Woof")
}
pet.bark()


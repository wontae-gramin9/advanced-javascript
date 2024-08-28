const person = { name: "Teddy", age: 2 }
// Object.freeze는 person.name = "Wontae", person.age = 2, person.gender = "male"
// 등의 prop을 추가하거나 수정하는 작업을 막을 수 있다
Object.freeze(person)
// 근데 이걸 자주 쓰지는 않고...
const nums = [1, 2, 3, 4]
// nums을 직접적으로 바꾸는게 아닌, copy를 만들 것이다
function push(arr, val) {
  return [...arr, val] // nums를 mutate를 하지 않고, 복사해서 새로운 값을 리턴
}

function removeLastItem(arr) {
  return arr.slice(0, -1) // slice는 copy를 만든다
}

person.age = 3
// IMMUTABLE
const newPerson = { ...person, age: 4 }
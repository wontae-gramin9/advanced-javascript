// Lexical scope(static scoping)
// 다시 말하면, scope는 dynamic하지 않다.
// 함수가 불리는 scope에 따라 달라지는게 아니라
// (어디서나 불려질 수 있고, 무한가지로 달라질 수 있으므로)
// 최초로 선언되었을 때의 scope를 기억한다(static)

let animal = "Barn owl"

function printAnimal() {
  console.log(animal)
}

function alsoPrintAnimal() {
  let animal = "Burrowing Owl" // 그렇기에 이 animal은 사용되지 않는다.
  printAnimal() // Barn owl이 최초 선언되었을 때 같은 scope에 있었으므로
}
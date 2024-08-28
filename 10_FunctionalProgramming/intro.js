// ESSENTIAL CONCEPTS
// higher order function = first class function
// pure function
// immutability
// clouser
// partial appllcation / currying
// function composition

// Declarative that imperative
// application state flows through pure functions

// Imperative: describe how a program works by updating a state
let sum = 0
for (let i = 1; i <= 5; i++) {
  sum += i
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const evens = []
for (let num of nums) {
  if (num % 2 === 0) {
    evens.push(num)
  }
}
// Functional: focus on what needs to be solved by puring fuctions, not mutating states
[1, 2, 3, 4, 5].reduce((arr, val) => arr + val, 0)
nums.filter(n => n % 2 === 0)
Math.max(...nums)

// OBJECTIVES
// avaoids looping, mutation and shared state, variable declartion & side effects
// predictable, test easiser, concurrent code